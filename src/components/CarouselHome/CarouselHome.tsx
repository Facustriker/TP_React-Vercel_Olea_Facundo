import { Carousel } from "react-bootstrap"


const CarouselHome = () => {
    return (
<>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            style={{maxHeight: "500px", objectFit: 'cover'}}
            src="https://images.pexels.com/photos/219867/pexels-photo-219867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
            <img
            className="d-block w-100"
            style={{maxHeight: "500px", objectFit: 'cover'}}
            src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2018/06/fondos-de-pantalla-naturaleza.jpg"
            alt="Second slide"/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
            <img
            className="d-block w-100"
            style={{maxHeight: "500px", objectFit: 'cover'}}
            src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</>

    )

} 

export default CarouselHome