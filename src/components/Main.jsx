import React, { memo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import ExploreIcon from "@material-ui/icons/Explore";
import HistoryIcon from "@material-ui/icons/History";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import WbCloudyRoundedIcon from "@material-ui/icons/WbCloudyRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import { toggleShowMatchedStations } from "../store/actionCreators";

const MainWrapper = styled.div`
  height: 400px;
  width: 100%;
  padding: 25px 0;
`;

const AQIWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const BasicInfo = styled.div`
  display: grid;
  grid-template-columns: 100%;
  @media only screen and (min-width: 800px) {
    grid-template-columns: 50% 50%;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 10px 0;
`;

const TextWrapper = styled.div`
  margin: 0 20px 0 25px;
`;

const Value = styled.span`
  font-weight: bold;
`;

const AQIValue = styled.span`
  font-weight: bold;
  color: ${props =>
    props.aqi < 50 ? "#07e342" : props.aqi < 100 ? "#f5b105" : "#f50505"};
`;

const EPAInfo = styled.span`
  margin-left: 25px;
`;

const EPA = styled.div`
  font-weight: bold;
  margin: 0 0 15px 50px;
`;

const Main = memo(({ hideMatchedStations, AQIData }) => {
  return (
    <MainWrapper onClick={hideMatchedStations}>
      {AQIData && (
        <AQIWrapper>
          <BasicInfo>
            <ItemWrapper>
              <LocationCityRoundedIcon fontSize="large" />
              <TextWrapper>
                City: <Value>{AQIData.city.name}</Value>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper>
              <ExploreIcon fontSize="large" />
              <TextWrapper>
                Latitude: <Value>{AQIData.city.geo[0].toFixed(3)}</Value>,
                Longitude: <Value>{AQIData.city.geo[1].toFixed(3)}</Value>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper>
              <HistoryIcon fontSize="large" />
              <TextWrapper>
                Time Zone: <Value>{AQIData.time.tz}</Value>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper>
              <QueryBuilderIcon fontSize="large" />
              <TextWrapper>
                Local Time: <Value>{AQIData.time.s}</Value>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper>
              <CloudQueueIcon fontSize="large" />
              <TextWrapper>
                {" "}
                PM2.5: <AQIValue aqi={AQIData.aqi}>{AQIData.aqi}</AQIValue>
              </TextWrapper>
              {AQIData.aqi < 50 ? (
                <InsertEmoticonIcon fontSize="large" />
              ) : AQIData.aqi < 100 ? (
                <SentimentDissatisfiedIcon fontSize="large" />
              ) : (
                <MoodBadIcon fontSize="large" />
              )}
            </ItemWrapper>
            <ItemWrapper>
              <WbCloudyRoundedIcon fontSize="large" />
              <TextWrapper>
                {" "}
                PM10: <Value>{AQIData.iaqi.pm10 && AQIData.iaqi.pm10.v}</Value>
              </TextWrapper>
            </ItemWrapper>
          </BasicInfo>
          <ItemWrapper>
            <AccountBalanceRoundedIcon fontSize="large" />
            <EPAInfo>EPA Info:</EPAInfo>
          </ItemWrapper>

          {AQIData.attributions.map((item, index) => (
            <EPA key={index}>{item.name}</EPA>
          ))}
        </AQIWrapper>
      )}
    </MainWrapper>
  );
});

const mapStateToProps = state => ({
  AQIData: state.getIn(["AQI", "AQIData"])
});

const mapDispatchToProps = dispatch => ({
  hideMatchedStations: () => dispatch(toggleShowMatchedStations(false))
});

Main.propTypes = {
  hideMatchedStations: PropTypes.func.isRequired,
  AQIData: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
