import { Carousel, CarouselItem, Image } from "react-bootstrap";

function Carosel(props){
    return(
        <>
        <div className="row mx-auto">
            <Carousel>
                <CarouselItem>
                    <Image src={props.obj.img1}  className="w-100"/>
                </CarouselItem>
                <CarouselItem>
                    <Image src={props.obj.img2} className="w-100" />
                </CarouselItem>
                <CarouselItem>
                    <Image src={props.obj.img3} className="w-100" />
                </CarouselItem>
            </Carousel>
        </div>
        </>
    )
}
export default Carosel;