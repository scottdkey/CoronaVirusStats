import React from "react";

const bodyText = ({fontColor}) => {
  return (
      <p style={{...styles.textContainer, color:fontColor}}>
        This API uses publicly available data about current confirmed cases,
        deaths, and recoveries of the COVID-19 virus AKA Coronavirus compiled by
        Johns Hopkins University. Accepts: country as filter parameter,
        otherwise returns all stats. Country name must match exactly with what
        is in the data (URL encoded spaces and punctuation) For some reason
        RapidAPI counts 304 "Not Modified" responses as "errors". This is the
        reason for the high "error count" of this API.
        <a 
          href="https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/details"
          style={{fontStyle: "italic"}}
        >
          More Details
        </a>
      </p>
  );
};

export default bodyText;

const styles= {
  textContainer: {
    width: "100%",
    textAlign: "left",
    margin: "auto",
    fontStyle: "oblique",
    lineHeight: "200%",
    maxWidth: "450px",
    minWidth: "200px"



  }

}
