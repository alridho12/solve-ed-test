import React, { useState } from 'react';
import ProgressNavbar from '../component/ProgressNavbar';
import Slider from '@mui/material/Slider';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import { Button, createTheme, Paper, ThemeProvider, Dialog, DialogContent, Typography, Box, Tabs, Tab } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { Description, Forum } from '@mui/icons-material';
import { styled } from '@mui/styles';
import questions from '../database/question_data.json';
import edcorrect from '../database/ed_correct.json';
import edincorrect from '../database/ed_incorrect.json';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffd018',
    },
  },
});

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    top: 0,
    height: 3,
  },
});

interface QuestionData {
  definition: string;
  question: string;
  options: string[];
  answer: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function valuetext(value: number) {
  return `${value}°C`;
}

const Question = () => {
  const [value, setValue] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const showDialog = (message: string) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      navigate('/result')
    }
  };

  const handleAnswer = (answer: string) => {
    const correctAnswer = questions[currentQuestionIndex]?.question_data?.answer;
    const isAnswerCorrect = answer === correctAnswer;
    setIsCorrect(answer === correctAnswer);
    setSelectedAnswer(answer);
    setAnswerStatus({
      ...answerStatus,
      [answer]: isAnswerCorrect,
    });
    if (!answers.includes(answer)) {
      setAnswers([...answers, answer]);
    }
    showDialog(answer === correctAnswer ? "Amazing!" : "Try again!");
  };

  const progress = (answers.length / questions.length) * 100;

  return (
    <ThemeProvider theme={theme}>
      <div className='min-vh-100'>
        <ProgressNavbar progress={progress} />
        <TabPanel value={value} index={0}>
          <section className='mt-16 passage'>
            <div className="bg-langit min-h-36">
              <div className="px-16 pt-4 flex items-center gap-4">
                <FontDownloadOutlinedIcon sx={{ fontSize: '20px' }} />
                <Slider
                  aria-label="Font Size"
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  step={1}
                  marks
                  min={0}
                  max={2}
                />
                <FontDownloadOutlinedIcon />
              </div>
            </div>
            <div>
              <Paper
                sx={{
                  position: 'absolute',
                  top: '140px',
                  overflowY: 'auto',
                  margin: 'auto',
                  right: '0',
                  left: '0',
                  textAlign: 'justify',
                  padding: '10px',
                  width: '90%',
                  borderRadius: '10px',
                  borderTop: '3px solid #03a9f4',
                  minHeight: '100px',
                }}
              >
                {questions[currentQuestionIndex]?.question_data?.definition || 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
              </Paper>
            </div>
          </section>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <section className='question'>
            {quizCompleted ? (
              <Typography variant="h6">You have completed the quiz!</Typography>
            ) : (
              <div>
                <div className='bg-langit min-h-64 px-5 pt-20 -z-10'>
                  <Button
                    variant='contained'
                    endIcon={<HelpIcon />}
                    size='large'
                    sx={{
                      borderRadius: '50px',
                      bgcolor: '#4caf50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      width: '100%',
                      textTransform: 'none',
                      paddingX: '10px',
                      paddingY: '6px',
                    }}
                  >
                    Let's test your knowledge with a quick quiz!
                  </Button>

                  <div className='mt-4'>
                    <Paper
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        borderRadius: '10px',
                        borderLeft: '3px solid #03a9f4',
                        minHeight: '100px',
                        fontSize: '1rem',
                        fontWeight: '700',
                        lineHeight: '1.5',
                        width: '100%'
                      }}
                    >
                      {questions[currentQuestionIndex]?.question_data?.question}
                    </Paper>
                  </div>
                </div>
                <div className='mt-4 px-16'>
                  {questions[currentQuestionIndex]?.question_data?.options.map((option: string, index: number) => (
                    <Button
                      key={index}
                      variant='outlined'
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: '15px',
                        fontWeight: '700',
                        borderRadius: '10px',
                        textTransform: 'none',
                        margin: '10px',
                        backgroundColor: selectedAnswer === option
                          ? (answerStatus[option] ? '#4caf50' : '#d9534f')
                          : 'transparent',
                        color: selectedAnswer === option
                          ? (answerStatus[option] ? '#ffffff' : '#ffffff')
                          : 'primary',
                        borderColor: selectedAnswer === option
                          ? (answerStatus[option] ? '#4caf50' : '#d9534f')
                          : 'inherit',
                      }}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

              </div>
            )}
          </section>
        </TabPanel>
        <Box sx={{ width: '100%', position: 'fixed', bottom: 0, bgcolor: '#222e3a', zIndex: 10 }}>
          <StyledTabs indicatorColor="secondary" value={value} textColor='secondary' onChange={handleChange} variant='fullWidth'>
            <Tab icon={<Description />} iconPosition='start' sx={{ color: 'white', textTransform: 'none' }} label="Passage" />
            <Tab icon={<Forum />} iconPosition='start' sx={{ color: 'white', textTransform: 'none' }} label="Question" />
          </StyledTabs>
        </Box>
        <Dialog
          open={openDialog}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogContent sx={{
            width: '100%',
            color: isCorrect ? '#4caf50' : '#a94442',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingX: '50px'
          }}>
            <Lottie animationData={isCorrect ? edcorrect : edincorrect} className='h-[100px]' />
            <Typography sx={{ textAlign: "center", fontWeight: '500', fontSize: '1.5rem' }} >{dialogMessage}</Typography>
            <Button sx={{
              backgroundColor: isCorrect ? '#4caf50' : '#d9534f',
              '&:hover': {
                backgroundColor: isCorrect ? '#31b0d5' : '#c9302c',
              },
              paddingX: '20px',
              paddingY: '10px',
              borderRadius: '10px'
            }} onClick={handleCloseDialog} variant='contained'>
              Continue
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default Question;
