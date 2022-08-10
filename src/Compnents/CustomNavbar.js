import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Head() {
  return (
    <Navbar bg="light" variant="light">
    <Container style={{height:"100px"}}>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAB/CAMAAACJ3OOAAAAAe1BMVEXnABP////nABDmAADoGifnAAvxhov/+Pn//PznAAb84eP5ycz+9PX96+385efuY2r3vL/wf4TqREbnFRjtXGPvbXPyjZLoGR/1pqr4w8bvdnr609XsWVz2sbXoKSz73N7rPETpMjfzlJnqPD70n6LsTFPpJzLsRU3taGlBVllsAAAE7UlEQVR4nO2b27KiMBBFMU2AoCB4AREQQfT4/184RCVpbjNnnhKrsp5OjU7VTtLd2Z1EyzIYDAaDwWAwGAwGg8FgMBgMBoPhqyCEAocSolrKf/NSTuz6+nOtbfIahWpJv6fTWz+bqHJXb9wqap51Nx7Vwn5FN/XbyO+197h+tP2GRaBwa4PVPEF703wEBGgbLqjnhC3VOYoYPS/NvViDM2WqZS4Bl+gf6jnRBVQLnYXAwf+F/NXKP+gYQwTOI52en2dRFGW5740+Oes3AALJQKW7joubzbcxat+KeD2op16i2wA6+Vhf7hBhHN42gjg5Hp9uA4AzUhcc00mdp5AeUW3yzlolMWyltE0zdApvE/ei2civbTUaADzkphVusXoG3bwn7enUOkX39xZ976HNAAjJhKz1HskCuCaV+4ksr0tpm63FNzNtbDXEUpQl5RO4lihgOH5ryy0u1mQBmCVUronUBDBn5MKjWKuNpYeTgJOYXhQ8cF1P1XNKkQMnLRaA7fpp3qCaArdFHxr0pTbY6bAAcvodJP8uYqrZTEag0wIQ6K1BKAsnsyshMo7nxXe4GuzCwrZ5MnoIoNh35AJNUL8LS6l5KiZzYEUdIIupsFa+ADJ7ZTmnNW4EHIACpYCHbZz6DBbGzZWWbeBFeVbLfwgiBy+GehsH7UdKhqI/GOn/BJmbHW/i+29axfoJ7cNfziQcViP9XWfsh+WZW9DjKAGo2gQg+084uHep/zTRb9HdjZ9ewWVkKcK9Wv3U/oR/VffhT/b5VL9F6eujsafwbLUHWnDtA0FUT3rD1cc/XWWJgWY1plabAHD/6IhEJYdC+KGqvQIg+cVE/uquWH+fq6UM/+er2nt5W8Cgk6R1NdV/UKx/O6OfG6LweMFT//pgGj3K2+Dl+V9Vp+d+OP8XDedfxD+bxr8blgXF8X+f6lcd//VHx1L9Ccof1BUkE/2K64+o/76s/9Zc/Wd8fYiVjeR7qdr6P7v/tlP99OfO91+Wjqy06v2XsH5G/+5/6qBznl06w3OoP2OKG4AZ/2lBONJP4BVSbh7vRimg2n8i/0+l/3dG+mXl32SJXv6fXXs9uP+qBvphi0//cf8VXlX3Xxb0CZDbsv89DvSni5d6merpx1qPqANDddKBckk++i/qgL45D9D5D+oBzs689o6NBvJRuU9QCRLHEqt2+fxNefXhUHHS6aJw6DreJdXi/DO8Kc9ejux3Q3Q1DfX8ZbZ30uz82aJMxEqe4vP/ZKbuVAeRGQHT5DEHOi5cowEQqE+jEVRJKiuT8r2rhzAZKjl+3cCgjnNx/7WJjvtU1qVItfWRsFQma3DGd7/88rSIm7Ztzl0rD+h5ip9qkbxvoJCuwG3Z4PaaiOtf1kof4RW6RM8LOCKLs4kvMJ5cBpcYbQSuDjsvgsDglqVqbP7+gRIO5UFkN4PmPVZ+8D+iG8DwyV6eHHb1nlCyr3eHZNhSutrJt3gIjZ/5BNU6y7J1Nd4GPM2C5wPcZ853ZqgUn5ksAumyU5aUqabyeZF5/usJnP9kGtX9MV2tb/4WRFWj+ytiCnWytAZ+Umv+/pbTVft7WY2blk1V3r/h/fOLbrs6OGX+aVS8IC+dQ7ehqZb1H9D3Dxfsx+Nhv3/G8CVTj+icA+N84+8vDAaDwWAwGAwGg8FgMBgMBoNBPeS7sezv5g/wh0NbMP9u9QAAAABJRU5ErkJggg==" alt="tun" style={{height:"50px",width:"100px"}}/>
    </Container>
  </Navbar>);}



  export default Head;