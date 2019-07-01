import React, { Component } from 'react';
import { Row, Col, Image, Button, Modal, Container } from 'react-bootstrap';

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
    overflow:'hidden',
    boxShadow: '10px 10px 5px grey'
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

const Title = (props) => {
    return <h2>Browse {props.title}.</h2>;
}

const SubTitle = (props) => {
    return <h3>Please hover and click on the image bellow.</h3>;
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: [false, false, false, false],
            data: [
                {title: "Sejarah Batik Semarang", images: "./images/batik_semarang.jpg", descriptions: `<p align="justify">Tan Kong Tien seorang putera tuan tanah Tan Siauw Liem, yang merupakan salah seorang menantu Sri Sultan Hamengkubuwono III yang menikah dengan RA Dinartiningsih.</p>
                <p align="justify">Tan Kong Tien memiliki keahlian membatik yang ditularkan dari isterinya RA Dinartiningsih dengan ulet dan gigihnya dia bisa mengembangkan usahanya dan mempunyai perusahaan yang bernama Batikkerij Tan Kong Tien mendapatkan hak atas monopoli batik di Jawa Tengah dan perusahannya ini kemudian diteruskan oleh Putrinya yang bernama R.Ng. Sri Murdijanti hingga tahun 1970.</p>
                <p align="justify">Dari dokumen Pemerintahan Kolonial Belanda, pada tahun 1919 - 1925 sentra batik di Semarang sangat berkembang, faktor krisis yang menyebabkan sulitnya bahan sandang juga faktor penyebab perkembangannya begitu cepat.</p>
                <p align="justify">Yang lebih unik lagi, para pengrajin Batik Semarangan tidak pernah membakukan motif batik karyanya, tidak seperti pengrajin kota Solo, Joga dan Pekalongan. Sebagai Masyarakat yang tinggal di Pesisir Utara pulau jawa, sudah menjadi kebiasaan untuk membatik dengan motif naturalis. Berbeda dengan pembatik dari Jogja, Solo dan Pekalongan yang memiliki motif Batik pakem dari Kraton.</p>`},

                {title: "Sejarah Batik Jogjakarta", images: "./images/batik_jogjakarta.jpg", descriptions: `<p align="justify">Keberadaan batik khas Yogyakarta sendiri tidak terlepas dari sejarah berdirinya kebangkitan Kerajaan Mataram Islam yang dibangun oleh Panembahan Senopati. Selama perjuangan mendirikan Mataram, Panembahan Senopati sering bertapa melakukan pengembaraan dan laku spiritual di sepanjang pesisir selatan Pulau Jawa. Konon, lansekap dan pemandangan tempat tersebut, yang dihiasi oleh deburan ombak menghantam barisan tebing atau dinding karang, telah mengilhaminya menciptakan pola batik parang. Motif ini kemudian menjadi salah satu yang khas dari busana Mataram.</p>
                <p align="justify">Pada tahun 1755 Perjanjian Giyanti memecah bagi Kasultanan Mataram menjadi dua, yaitu Kasunanan Surakarta dan Kasultanan Yogyakarta. Seluruh harta kerajaan yang ada, termasuk warisan budaya, dibagi ke dua wilayah tersebut. Khusus kelengkapan busana Keraton Mataram, termasuk batik, seutuhnya menjadi milik Keraton Yogyakarta. Kekhasan itu masih dipertahankan hingga sekarang, baik motif maupun warnanya. Corak batik yang didominasi warna tanah ini kemudian menjadi cikal bakal batik khas Yogyakarta.    </p>
                <p align="justify">Perkembangan batik awalnya memang masih terbatas di lingkungan keraton. Kegiatan membatik merupakan bagian dari pendidikan putri bangsawan di dalam lingkup tembok keraton. Pengenalan estetika paling halus, hingga penguasaan teknik membatik yang rumit. merupakan bentuk pendidikan olah rasa, kesabaran, maupun ketekunan.</p>
                <p align="justify">Saat itu, laku membatik hanya dilakukan oleh para ratu dan putri kerajaan yang dibantu oleh para Abdi Dalem perempuan. Lambat laun, pekerjaan membatik yang belum selesai mulai boleh dibawa keluar keraton untuk dilanjutkan di rumah masing-masing. Karena dikerjakan hampir setiap hari, keinginan membuat batik untuk diri sendiri pun muncul dari para Abdi Dalem ini. Bersamaan dengan itu, kegiatan membatik pun semakin meluas pada keluarga keraton lainnya, termasuk istri Abdi Dalem dan prajurit. Di lapisan masyarakat, rakyat yang kerap melihat keluarga keraton mengenakan batik pun mulai tertarik untuk menirunya.</p>
                <p align="justify">Akhirnya, pesona batik mampu membuatnya keluar dari tembok keraton dan dinikmati semua kalangan. Dalam prosesnya, motif-motif baru pun bermunculan dan menjadi kekhasan sendiri bagi kelompok masing-masing. Ada batik keraton dan batik larangan yang hanya boleh dipakai oleh raja-ratu maupun kerabat ; batik sudagaran yang dipakai kaum berekonomi kuat namun bukan keturunan raja ; batik petani/rakyat yang dipakai petani dan masyarakat umum. Dalam konteks ini, keberadaan batik turut menjadi identitas sosial di tengah masyarakat.</p>`},
                {title: "Sejarah Batik Madura", images: "./images/batik_madura.jpg", descriptions: `<p align="justify">Sejarah batik Madura sudah ada sejak zaman kerajaan. Kain batik Madura mulai dikenal masyarakat luas pada abad ke 16 dan 17.  Hal ini bermula ketika terjadi peperangan di Pamekasan Madura antara Raden Azhar (Kiai Penghulu Bagandan) melawan Ke’ Lesap. Raden Azhar merupakan ulama penasihat spriritual Adipati Pamekasan yang bernama Raden Ismail (Adipati Arya Adikara IV).  Sedangkan Ke’ Lesap merupakan putera Madura keturunan Cakraningrat I dengan istri selir.</p>
                <p align="justify">Dalam peperangan itu, Raden Azhar memakai pakaian kebesaran kain batik dengan motif parang atau dalam bahasa Madura disebut motif leres yakni kain batik dengan motif garis melintang simetris. Ketika memakai kain batik motif parang, Raden Azhar memiliki kharisma, tanpak gagah berwibawa. Sejak itulah, batik menjadi perbincangan di kalangan masyarakat Madura, terutama pembesar-pembesar di Pamekasan.</p>`},
                {title: "Sejarah Batik Solo", images: "./images/batik_solo.jpg", descriptions: `<p align="justify">Seperti ditulis di kampoenglaweyan.com, Kyai Ageng Henis adalah tokoh yang pertama kali memperkenalkan batik di desa Laweyan yang saat itu masuk ke wilayah kerajaan Pajang. Ki Ageng Henis adalah putra Ki Ageng Selo yang juga keturunan Brawijaya V. Beliau bermukim di desa Laweyan sejak tahun 1546 M.</p>
                <p align="justify">Ki Ageng Henis yang dikenal dengan Ki Ageng Laweyan merupakan “manggala pinatuwaning nagari” semasa Jaka Tingkir masih menjadi Adipati Pajang. Beliau adalah kakek dari Danang Sutawijaya yang menjadi pendiri kerajaan Mataram .</p>
                <p align="justify">Desa Laweyan yang terletak di tepi Sungai Laweyan ini, dulunya adalah pusat perdagangan Lawe (bahan baku tenun). Bahan baku kapas dipasok dari daerah Juwiring, Pedan dan Gawok. Proses distribusi barang di Pasar Lawe dilakukan melalui bandar Kabanaran yang tak jauh dari Pasar Lawe. Dulu terdapat banyak Bandar di tepi sungai, seperti Bandar Kabanaran, dan Bandar Laweyan. Melalui Bandar inilah yang menghubungkan Desa Laweyan menuju Sungai Bengawan Solo. Dari sinilah, batik terhubung dengan daerah pesisir.</p>`}
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
            <Container>
                <Row style={{marginTop: '2%'}}>
                    <Col xs={12} md={12}>
                        <Title title="Batik History"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <SubTitle title="Please hover and click on the image bellow."/>
                    </Col>
                </Row>
                <div style={boxStyle}>
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
                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><div dangerouslySetInnerHTML={{ __html: this.state.descriptions }} /></Modal.Body>
                        <Modal.Footer>
                            <a href="https://www.matahari.com/products?category_id=&q=batik" class="btn btn-success" target="_blank">I Want This One!</a>
                            <Button variant="danger" onClick={this.handleClose}>
                            Close
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default HomePage;