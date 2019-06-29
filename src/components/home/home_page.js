import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

const boxStyle = {
    position:'absolute',
    top:'0',
    right:'0',
    bottom:'0',
    left:'0',
    zIndex:'99',
    margin:'auto',
    height:'50%',
    width:'80%',
    border:'1px solid #000',
    textAlign:'center',
    overflow:'hidden'
};

const ImageView = (props) => {
    var lineStyle;

    if (props.isHover) {
        lineStyle = {
            WebkitFilter:'grayscale(0%)'
        }
    } else {
        lineStyle = {
            WebkitFilter:'grayscale(100%)'
        } 
    }
    return (
        <Image 
            style={lineStyle} 
            onMouseOver={() => props.onMouseOver()}
            onMouseLeave={() => props.onMouseLeave()}
            src={props.images} />
    )
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: [false, false, false, false],
            data: [
                {title: "Batik Semarang", images: "./images/batik_semarang.jpg"},
                {title: "Batik Jogjakarta", images: "./images/batik_jogjakarta.jpg"},
                {title: "Batik Madura", images: "./images/batik_madura.jpg"},
                {title: "Batik solo", images: "./images/batik_solo.jpg"}
            ],
        };
        this.toggleHover = this.toggleHover.bind(this);
        this.toggleHoverOut = this.toggleHoverOut.bind(this);
    }

    toggleHover(i) {
        return () => {
            if (this.state.hover[i] === true) {
                return this.state;
            }
            
            let hover = [...this.state.hover]
            hover[i] = true;
            this.setState({ ...this.state, hover });
        }
    }

    toggleHoverOut() {
        if (this.state.hover === false) {
            return this.state;
        }
        this.setState({ ...this.state, hover: [false, false, false, false] });
    }

    render() {
        return (
            <div style={boxStyle}>
                <Container>
                    <Row>
                        {this.state.data.map((d, i) => {
                            return (
                                <Col xs={6} md={3}>
                                    <ImageView
                                        title={d.title}
                                        images={d.images}
                                        onMouseOver={this.toggleHover(i)}
                                        onMouseLeave={this.toggleHoverOut}
                                        isHover={this.state.hover[i]}
                                    >

                                    </ImageView>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage;