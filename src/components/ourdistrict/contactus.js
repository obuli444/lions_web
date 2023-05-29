import React ,{useState}from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import locationicon from "../../assets/locationline.svg";
import phoneicon from "../../assets/phone_line.svg";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppToast from '../common-components/apptoast';
import { db } from "../../firebase/config";
import { collection,addDoc } from "firebase/firestore";


export default function Contactus() {
  const [showAlert, setAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  async function onSubmit(data) {
    data['createdt']=new Date();
    const {fullname,email,mobileno,message,createdt} = data;
    let collectionRef = collection(db, 'contactusdetails');
    console.log("collectionRef",collectionRef)
    setAlert(true);
    console.log(data);
    await addDoc(collectionRef, {
      fullname,
      email,
      mobileno,
      message,
      createdt,
      status: 'Active'
    });
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    reset();
  }
  return (
    <React.Fragment>
      {showAlert&&  
     <AppToast showAleart={showAlert} icon="mgc_check_circle_fill" message={`Thanks for Contact us!`} />}
      <Box sx={{ flexGrow: 1 }} className="p-a-84">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12} className="contact-us-sectionone">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sm={12}>
                <p className="section-header-title contactus-title">
                  Connect with us and join<br></br>
                  the roar of service
                </p>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <p className="contactus-subtitle">
                  We're always happy to hear from you. We believe in serving our
                  communities and making a positive impact on the world. If you
                  have any questions or comments about our club or our
                  activities, please don't hesitate to reach out to us.
                </p>
              </Grid>
              <Grid item xs={12} md={12} sm={12}></Grid>
              <Grid item xs={12} md={12} sm={12} className="p-t-0">
                <p className="our-office programs-header-title">Our Office</p>
              </Grid>
              <Grid item xs={12} md={12} sm={12} className="p-t-0">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="contactmap"
                      className="gmap_iframe"
                      width="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=600&amp;height=202&amp;hl=en&amp;q=2, Moonstone Apts, 65 E Linking Rd, Next To Standard Chartered Bank, Santacruz, Karnataka&amp;t=p&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <table>
                  <tr>
                    <td valign="top">
                      <img src={locationicon} alt="location icon"></img>
                    </td>
                    <td>
                      <p className="contactus-subtitle location-address">
                        Lions club international District 324 - D
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <p className="contactus-subtitle location-address">
                        2, Moonstone Apts, 65 E Linking Rd, Next To Standard
                        Chartered Bank, Santacruz, Karnataka
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      {" "}
                      <img src={phoneicon} alt="phoneicon"></img>
                    </td>
                    <td>
                      <p className="contactus-subtitle location-address">
                        7889455212
                      </p>
                    </td>
                  </tr>
                </table>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sm={12} className="contactus-sectiontwo p-a-0">
            <Container className={"p-a-84 contactus-formsection"}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                id="contactForm"
              >
                <Row className="p-b-16">
                  <Col className="p-a-0">
                    <div className="">
                      <label htmlFor="fullname">Full name</label>
                    </div>
                    <div className="">
                      <input
                        className="form-control"
                        type="text"
                        {...register("fullname", {
                          required: true,
                        })}
                        id="fullname"
                        placeholder="full name"
                      />
                      {errors.fullname && (
                        <span className="error-span">
                          Full name is required
                        </span>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="p-b-16">
                  <Col className="p-a-0">
                    <div className="">
                      <label htmlFor="email">Email ID</label>
                    </div>
                    <div className="">
                      <input
                        className="form-control"
                        type="email"
                        {...register("email", {
                          required: true,
                        })}
                        id="email"
                        placeholder="Email address"
                      />
                      {errors.email && (
                        <span className="error-span">
                          Email address is required
                        </span>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="p-b-16">
                  <Col className="p-a-0">
                    <div className="">
                      <label htmlFor="mobileno">Mobile number</label>
                    </div>
                    <div className="">
                      <input
                        className="form-control"
                        type="text"
                        {...register("mobileno", {
                          required: true,
                        })}
                        id="mobileno"
                        placeholder="+91 00000-00000"
                      />
                      {errors.mobileno && (
                        <span className="error-span">
                          Mobile number is required
                        </span>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="p-b-16">
                  <Col className="p-a-0">
                    <div className="">
                      <label htmlFor="message">Message</label>
                    </div>
                    <div className="">
                      <textarea
                        rows="5"
                        cols="50"
                        className="form-control"
                        type="message"
                        {...register("message", {
                          required: true,
                          maxLength: 800,
                        })}
                        id="message"
                        placeholder="Type here"
                      />
                      {errors.message?.type === "required" && (
                        <span className="error-span">Message is required</span>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="p-b-16">
                  <Col className="p-a-0 p-t-0">
                    <input
                      value={"Send"}
                      type="submit"
                      className="contactus-sendbtn"
                      form="contactForm"
                    />
                  </Col>
                </Row>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
