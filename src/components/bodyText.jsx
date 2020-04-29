import React from "react";

const bodyText = () => {
  return (
      <p>
        This API uses publicly available data about current confirmed cases,
        deaths, and recoveries of the COVID-19 virus AKA Coronavirus compiled by
        Johns Hopkins University. Accepts: country as filter parameter,
        otherwise returns all stats. Country name must match exactly with what
        is in the data (URL encoded spaces and punctuation) For some reason
        RapidAPI counts 304 "Not Modified" responses as "errors". This is the
        reason for the high "error count" of this API.
        <a href="https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/details">
          More information on this API can be found here.
        </a>
      </p>
  );
};

export default bodyText;
