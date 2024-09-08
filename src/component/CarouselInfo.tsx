import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const CarouselInfo = () => {
    return (
        <div className=' w-96 '>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <img
                    src="https://d6kou6k0qy9rq.cloudfront.net/eyJidWNrZXQiOiJ3ZWJlZHByb2QiLCJrZXkiOiJhc3NldHMvaW1hZ2VzL2RpY3Rpb25hcnlfdHV0b3JpYWwxLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ=="
                    style={{
                        display: 'block',
                        height: '140px',
                        margin: 'auto',
                        width: '291px'
                    }}
                    alt="pict"
                />
                <img
                    src="https://d6kou6k0qy9rq.cloudfront.net/eyJidWNrZXQiOiJ3ZWJlZHByb2QiLCJrZXkiOiJhc3NldHMvaW1hZ2VzL2RpY3Rpb25hcnlfdHV0b3JpYWwyLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjM4NH19fQ=="
                    style={{
                        display: 'block',
                        height: '140px',
                        margin: 'auto',
                        width: '291px'
                    }}
                    alt="pict"
                />
                <img
                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '140px',
                        margin: 'auto',
                        width: '291px'
                    }}
                    alt="pict"
                />
                <img
                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '140px',
                        margin: 'auto',
                        width: '291px'
                    }}
                    alt="pict"
                />
                <img
                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '140px',
                        margin: 'auto',
                        width: '291px'
                    }}
                    alt="pict"
                />
            </Carousel>
        </div>
    )
}

export default CarouselInfo