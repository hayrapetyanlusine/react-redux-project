import './Slider.scss';
import slide1 from '../Images/slider1.png';
import slide2 from '../Images/slider2.png';
import slide3 from '../Images/slider3.png';
export {slide1, slide2, slide3};


export function Slider({wrapperRef, slide, next, prev}) {
    return(
        <>
        <div className="slider-container" >
            <div className="slider-wrapper" ref={wrapperRef} style={{width: `${(slide.length) * 100}vw`}}>
                {
                    slide.map((el) => {
                       return( 
                           <div className="slide" style={{backgroundImage: `url(${el.img})`}} key={el.id}>
                               <h1>{el.title}</h1>
                               <p>{el.text}</p>
                           </div>
                       )
                    })
                }
            </div>
            <div className='prev' onClick={() => {prev(wrapperRef)}}> {"<"} </div>
            <div className='next' onClick={() => {next(wrapperRef)}}> {">"} </div>
        </div>
        
        </>
    );
}

export const initialSlider = [
    {
        id: 0,
        img: slide1,
        name: 'Slide 1',
        title: "Chocolate",
        text: "Bring your happines through a piece of cake"
    },
    {
        id: 1,
        img: slide2,
        name: 'Slide 2',
        title: "Chocolate",
        text: "Bring your happines through a piece of cake"
    },
    {
        id: 2,
        img: slide3,
        name: 'Slide 3',
        title: "Chocolate",
        text: "Bring your happines through a piece of cake"
    }
];

let activeSlideIndex = 0;

export function sliderReducer(state=[], action) {
    if(action.type === "next") {
        const width = action.payload.next.current.clientWidth;
        
        if(activeSlideIndex <= state.length) {
            activeSlideIndex++;
            if(activeSlideIndex === state.length){
                activeSlideIndex = 0;
                action.payload.next.current.style.transform =  `translateX(-${activeSlideIndex * width }px)`;
            }
        }
        action.payload.next.current.style.transform =  `translateX(-${activeSlideIndex * width / state.length-1}px)`;
    } else if(action.type === "prev") {
        const width = action.payload.prev.current.clientWidth;

        if(activeSlideIndex > 0 ) {
            activeSlideIndex--;
            action.payload.prev.current.style.transform = 
            `translateX(${activeSlideIndex * width / state.length}px)`
            if(activeSlideIndex === state.length-2) {
                action.payload.prev.current.style.transform = `translateX(-${width / state.length-1}px)`;
            }
        }
    }
    return state;
}

export function next(next) {
    return{
        type: "next",
        payload: ({
            next: next
        })
    }
}

export function prev(prev) {
    return{
        type: "prev",
        payload: ({
            prev: prev
        })
    }
}

export function selectSlide(state) {
    return state.slider;
}