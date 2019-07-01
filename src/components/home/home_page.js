import React, { Component } from 'react';
import { Row, Col, Image, Button, Modal } from 'react-bootstrap';

const boxStyle = {
    position:'absolute',
    top:'0',
    right:'0',
    bottom:'0',
    left:'0',
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
            WebkitFilter:'grayscale(0%)',
            cursor: 'pointer'
        }
    } else {
        lineStyle = {
            WebkitFilter:'grayscale(100%)',
            cursor: 'pointer'
        } 
    }
    return (
        <div>
        <Image 
            style={lineStyle} 
            onMouseOver={() => props.onMouseOver()}
            onMouseLeave={() => props.onMouseLeave()}
            src={props.images} 
            onClick={props.onClick} />
        </div>
    )
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: [false, false, false, false],
            data: [
                {title: "Batik Semarang", images: "./images/batik_semarang.jpg", descriptions: "Ini adalah batik Semarang"},
                {title: "Batik Jogjakarta", images: "./images/batik_jogjakarta.jpg", descriptions: "Ini adalah batik Jogjakarta"},
                {title: "Batik Madura", images: "./images/batik_madura.jpg", descriptions: "Ini adalah batik Madura"},
                {title: "Batik Solo", images: "./images/batik_solo.jpg", descriptions: "Ini adalah batik Solo"}
            ],
            show: false,
            title: "loading...",
            descriptions: "loading..."
        };
        this.toggleHover = this.toggleHover.bind(this);
        this.toggleHoverOut = this.toggleHoverOut.bind(this);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
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

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(title, descriptions) {
        this.setState({
             show: true,
             title: title,
             descriptions: descriptions
        });
    }

    render() {
        return (
            <div style={boxStyle}>
                {/* <Container> */}
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
                                        onClick={(e) => this.handleShow(d.title, d.descriptions)}
                                    >

                                    </ImageView>
                                    
                                </Col>
                            );
                        })}
                        <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.descriptions}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.handleClose}>
                            Close
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    </Row>
                {/* </Container> */}
            </div>
        )
    }
}

export default HomePage;