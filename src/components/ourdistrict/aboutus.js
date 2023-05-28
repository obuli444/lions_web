import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CommonHeader from "../ourdistrict/commonheader";
import sectiontwodivider from "../../assets/sectiontwodivider.png";
import { useFetchCollection } from "../getfirebasedata";
import aboutusimage from "../../assets/aboutusimage.png";
import sectionfivedivider from "../../assets/sectionfivedivider.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Aboutus() {
  const { fbdbdata: aboutusourobjective } = useFetchCollection(
    "aboutus-ourobjective"
  );
  return (
    <React.Fragment>
      <CommonHeader
        details={{
          formaltitle: "",
          name: "Together We Can - Changing The World!",
          designation: "",
        }}
      />
      <Box sx={{ flexGrow: 1 }} className="p-a-84">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={sectiontwodivider}
              alt="divider"
              className="sectiontwodivider"
            />
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={12}>
            <p className="section-header-title ">{"Our History"}</p>
          </Grid>
        </Grid>
        <Grid container className="p-t-40 " spacing={2}>
          <Grid item xs={12} className="p-t-0">
            <img
              src={aboutusimage}
              alt="aboutusimage"
              className="w-100 section-p-t-12"
            />
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={12}>
            <p className="aboutus-description-txt">
              2006 ஆம் ஆண்டு ஏப்ரல் மாதம் 15.15 தேதிகளில் கோயம்புத்தூர் S.N.A.
              கலையரங்கத்தில் ஆளுநர் Er.R. முருகேசன் தலைமையில் நடைபெற்ற 324 81
              மாவட்ட மாநாட்டில், 324 95 என்ற புதிய மாவட்டத்தை உருவாக்க ஒரு
              மனதாகத் தீர்மானிக்கப்பட்டது.
              <br />
              அதன் அடிப்படையின் 324 85 புதிய மாவட்ட ஆளுநராக அரிமா C.G.V, கணேசன்
              அவர்களும், துணை ஆளுநராக அரிமா Er. A. அண்ணாமயை அவர்களும் ஏகமனதாக
              தேர்ந்தெடுக்கப்பட்டனர். ஆளுநர் அரிமா C.G.V. கணேசன் அவர்களின்,
              மாவட்டச் செயலாளர் அரிமா V. சசிதரன், மாவட்டப் பொருளாளர் அரிமா M.V.
              பிரகாஷ் ஆகியோர் நியமிக்கப்பட்டனர். மாவட்டம் 324 85 இன் வாசகம்,
              Bulld Bands - உறவை மேம்படுத்துவோம் என்பதாகும்.
              <br />
              2007 ஆம் ஆண்டு ஏப்ரன் மாதம் 14ம் தேதி ஸ்ரீ ராம கிருஷ்ணா கம்பாண
              மண்டபத்தில் நடைபெற்ற மாவட்ட மாநாட்டின், மாவட்ட ஆளுநராக, அரிமா ErA
              அண்ணாமலை அவர்களும் அரிமா துணை ஆளுநராக SA. ரவிச்சந்திரன் அவர்கள்
              தேர்ந்தெடுக்கப்பட்டனர். 2007 - 2008 ஆம் ஆண்டுக்கு ErA அண்ணாமமை
              அவர்களால் மாவட்ட செயலாளர் அரிமா N. ராஜன் அவர்களும், மாவட்டப்
              பொருளாளராக அரிமா PL சிவசாமி அவர்களும் நியமிக்கப்பட்டனர். 2007-2008
              ஆம் அரிமா ஆண்டின் வாசகம் Inspire - Imvolve - Innovate எழுச்சி -
              ஈடுபாடு - ஏற்றம்.
              <br />
              2008 ஆம் ஆண்டு ஏப்ரவ் மாதம் 13ம் தேதி ராமகிருஷ்ணா கலையரங்கில்
              நடைபெற்ற மாநாட்டில் கோவை நியூ சென்ட்ரல் அரிமா சங்கத்தைச் சார்ந்த
              A.S. ரவிச்சந்திரன் அவர்கள் 2008-2009 ஆண்டுக்கு ஆளுநராகவும்,
              அவினாசி கோண்டன் ஜீப்லி அரிமா சங்கத்தைச் சார்ந்த Dr.M. வேலுசாமி
              அவர்கள் உதவி ஆளுநராகவும் தேர்ந்தெடுக்கப்பட்டனர். மாவட்ட யாசகம்
              Dream - Pian - Achieve - கனவுகாண் - திட்டமிடு - வெற்றிபெறு D சைமன்
              அவர்கள் மாவட்ட செய்வாளராகவும், K. ராமசாமி அவர்கள் பொருளாளராகவும்
              நியமிக்கப்பட்டனர்.
              <br />
              2009 ஆம் ஆண்டு மார்ச் மாதம் 28, 29 நேதிகளில் கோவை ராமகிருஷ்னா
              கல்யானமண்டபத்தில் நடைபெற்ற மாவட்ட மாநாட்டில் அவினாசி கோல்டன்
              ஜீப்லி அரிமா சங்கத்தைச் சார்ந்த Dr.M. "வேலுசாமி அவர்கள் மாவட்ட
              ஆளுநராகவும், மேட்டுப்பாளையம் அரிமா (சங்கத்தைச் சார்ந்த M.
              வின்சென்ட் வேதராஜ் அவர்கள் முதல் மாவட்ட துணை ஆளுநராகவும் கோவை
              பிரஸ்டீஜ் அரிமா சங்கத்தைச் சார்ந்த Er.P பரமேஸ்வரன் அவர்கள்
              இரண்டாம் மாவட்ட துணை ஆளுநராகவும் தேர்ந்தெடுக்கப்பட்டனர். மாவட்ட
              வாசகம் இதயங்களோடு இணைவோம் - Knitting Hearts Together. T.S.
              விஜயகுமார் மாவட்டச் செயலாளராகவும். Dt C.S.R. குமார் மாவட்ட
              பொருளாளராகவும் நியமிக்கப்பட்டனர்.
              <br />
              2010 ஆம் ஆண்டு மார்ச் மாதம் 17ம் தேதி திருப்பூர் TEKICIKF வணிக
              வளாகத்தில் நடைபெற்ற மாவட்ட மாநாட்டில் மேட்டுப்பாளையம் அரிமா
              சங்கத்தைச் சார்ந்த M. வின்சென்ட் வேதராஜ அவர்கள் மாவட்ட
              ஆளுநராகவும், கோவை பிரண்டிஜ் அரிமா சங்கத்தைச் சார்ந்த Erp
              பரமேஸ்வரன் அவர்கள் முதல் மாவட்ட துணை ஆளுநராகவும், கோவை
              சித்தாபுதூர் அரிமா சங்கத்தைச் சார்ந்த Na மனோகரன் அவர்கள் இரண்டாம்
              மாவட்ட துனை ஆளுநராகவும் தேர்ந்தெடுக்கப்பட்டனர். மாவட்ட வாசகம்
              வெற்றியை நோக்கி பயணிப்போம் - March Towards Victory M.K
              கிருஷ்ணமூர்த்தி மாவட்டச் செய்யாளராகவும், B.K. ஆறுமுகம் மாவட்ட
              பொருளாளராகவுமி நியமிக்கப்பட்டனர்.
              <br />
            </p>
          </Grid>
          <Grid item xs={12}>
            <p
              className="footer-donate-btn aboutus-learnmore"
              style={{
                background: `#FACA0E`,
                border: `1px solid #FACA0E`,
              }}
            >
              <span className="material-symbols-outlined">download</span>
              <span className="learnmore">
                {"Learn more about our history"}
              </span>
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="p-a-84 deatils-info-ourmentor">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={sectionfivedivider}
              alt="divider"
              className="sectiontwodivider"
            />
          </Grid>
        </Grid>
        <Grid container className="p-t-40 align-center-section" spacing={0}>
          <Grid item xs={12}>
            <p className="section-header-title ">{"Our Objectives"}</p>
          </Grid>
        </Grid>
        {/* <Grid container className="p-t-40 align-center-sectn" spacing={3}>
          {aboutusourobjective !== null &&
            aboutusourobjective.map((ele, index) => {
              return (
                <Grid item xs={12} md={4} sm={12}>
                  <Grid container className="" spacing={2}>
                    <Grid item>
                      <img src={ele.iconurl} alt={ele.title} width={"32px"}/>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <p className="programs-header-title">{ele.title}</p>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <p className="aboutus-card-des">{ele.description}</p>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid> */}
        <div className="p-t-40 align-center-sectn m-a-0">
          <Row>
            {aboutusourobjective !== null &&
              aboutusourobjective.map((ele, index) => {
                return (
                  <Col className="p-a-0" key={index} xs={12} md={4} sm={12}>
                    <Row className="aboutus-cards">
                      <Col  md="auto" className="p-a-0">
                        {" "}
                        <img src={ele.iconurl} alt={ele.title} width={"60px"} />
                      </Col>
                      <Col xs={12} md={12} sm={12} className="p-a-0">
                        {" "}
                        <p className="programs-header-title">{ele.title}</p>
                      </Col>
                      <Col xs={12} md={12} sm={12} className="p-a-0">
                        {" "}
                        <p className="aboutus-card-des">{ele.description}</p>
                      </Col>
                    </Row>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Box>
    </React.Fragment>
  );
}
