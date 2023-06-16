import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _ from 'lodash';
import { InputSwitch } from "primereact/inputswitch";


export default function Addedithomecarousal() {
  const [sliderImage, setSliderImage] = useState(null);
  const [setlinkenabled, setlinkEnabled] = useState(false);
  const [slideActive,setSlideActive] =  useState(true);
  const defaultValues = {
    sliderimage: "",
    slidertitle: "",
    sliderdescription: "",
    sliderbtntext: "",
    sliderbtnlink: "",
    sliderstatus: '',
    sliderimageurl: "",
  };
  const {
    formState: { errors },
    handleSubmit,
    setValue,
    register,
    reset,
  } = useForm({ defaultValues });
  const onSubmit = (data) => {
    console.log("data", data);
    setSliderImage(null);
    reset();
  };

  return (
    <React.Fragment>
      <div className="p-a-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="p-b-16">
            <Col className="p-a-0 col-12">
              <div className="p-b-8">
                <label htmlFor="fullname">
                  Slider Image <span className="p-error">*</span>
                </label>
              </div>
              <div className="p-b-8">
                <input
                  className="form-control"
                  type="file"
                  {...register("sliderimage", {
                    required: true,
                  })}
                  id="sliderimage"
                  placeholder="Club logo"
                  accept="image/*"
                  onChange={(e) => {
                    // const confile = Base64Convertion(e.target.files);
                    const selectedfile = e.target.files;
                    if (selectedfile.length > 0) {
                      const [imageFile] = selectedfile;
                      const fileReader = new FileReader();
                      fileReader.onload = () => {
                        const srcData = fileReader.result;
                        setValue("sliderimageurl", srcData);
                        setSliderImage(srcData);
                      };
                      fileReader.readAsDataURL(imageFile);
                    }
                  }}
                />
                {errors.sliderimageurl && (
                  <span className="error-span">
                    Slider Image logo is required
                  </span>
                )}
              </div>
            </Col>
            {!_.isNil(sliderImage) && (
              <Col className="p-a-0 col-12">
                <img
                  src={sliderImage}
                  alt="slider-img"
                  width={"200px"}
                  height={"150px"}
                />
              </Col>
            )}
          </Row>
          <Row className="p-b-16">
            <Col className="p-a-0 col-12">
              <div className="p-b-8">
                <label htmlFor="slidertitle">
                  Slider Title<span className="p-error">*</span>
                </label>
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  {...register("slidertitle", {
                    required: true,
                  })}
                  id="slidertitle"
                  placeholder="Slider title"
                />
                {errors.slidertitle && (
                  <span className="error-span">Slider Title is required</span>
                )}
              </div>
            </Col>
          </Row>
          <Row className="p-b-16">
            <Col className="p-a-0 col-12">
              <div className="p-b-8">
                <label htmlFor="sliderdescription">
                  Slider Description<span className="p-error">*</span>
                </label>
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  {...register("sliderdescription", {
                    required: true,
                  })}
                  id="sliderdescription"
                  placeholder="Slider Description"
                />
                {errors.sliderdescription && (
                  <span className="error-span">
                    Slider Description is required
                  </span>
                )}
              </div>
            </Col>
          </Row>
          {/* Enable slider btn based on Condition */}
          <Row className="p-b-16">
            <Col className="p-a-0 col-12">
              <div className="p-b-8">
                <label>
                  Slider Button
                </label>
              </div>
              <InputSwitch
                checked={setlinkenabled}
                onChange={(e) => {
                  setlinkEnabled(e.value);
                  console.log(e.value);
                }}
              />
            </Col>
          </Row>
          {setlinkenabled && (
            <Row className="p-b-16">
              <Col className="p-a-0 col-12 p-b-16">
                <div className="p-b-8">
                  <label htmlFor="sliderbtntext">
                    Slider Button text<span className="p-error">*</span>
                  </label>
                </div>
                <div className="">
                  <input
                    className="form-control"
                    type="text"
                    {...register("sliderbtntext", {
                      required: setlinkenabled ? true:false,
                    })}
                    id="sliderbtntext"
                    placeholder="Slider Button text"
                  />
                  {errors.sliderbtntext && (
                    <span className="error-span">
                      Slider Button text is required
                    </span>
                  )}
                </div>
              </Col>
              <Col className="p-a-0 col-12">
                <div className="p-b-8">
                  <label htmlFor="sliderbtnlink">
                    Slider Button link<span className="p-error">*</span>
                  </label>
                </div>
                <div className="">
                  <input
                    className="form-control"
                    type="text"
                    {...register("sliderbtnlink", {
                      required: setlinkenabled ? true:false,
                    })}
                    id="sliderbtnlink"
                    placeholder="Slider Button text"
                  />
                  {errors.sliderbtnlink && (
                    <span className="error-span">
                      Slider Button link is required
                    </span>
                  )}
                </div>
              </Col>
            </Row>
            
          )}
          <Row className="p-b-16">
            <Col className="p-a-0 col-12">
              <div className="p-b-8">
                <label>
                  Slider Status <span className="p-error">*</span>
                </label>
              </div>
              <InputSwitch
                checked={slideActive}
                onChange={(e) => {
                setSlideActive(e.value);
                setValue("sliderstatus",e.value===true? 'Active':'Inactive')
                }}
              />
            </Col>
          </Row>
          <Row className="p-b-16">
            <Col className="p-a-0 col-12">
              <Button label="Submit" type="submit" icon="pi pi-check" />
            </Col>
          </Row>
        </form>
      </div>
    </React.Fragment>
  );
}
