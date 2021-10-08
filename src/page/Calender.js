import React from "react";
import styled from "styled-components";
//import { history } from "../redux/configStore";
import { useHistory } from "react-router-dom";

// 달력
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const Calender = () => {
  const history = useHistory();
  console.log("ho");

  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: "event 1", date: "2021-10-01", time: "11:00:00" },
          { title: "event 2", date: "2021-10-01", time: "10:00:00" },
        ]}
      />

      <Button
        onClick={() => {
          history.push("/create");
        }}
      >
        +
      </Button>
    </React.Fragment>
  );
};

export default Calender;

const Button = styled.div`
  width: 50px;
  height: 50px;
  background: #2c3e50;
  border: 1px solid black;
  border-radius: 50%;
  font: 50px/50px "arial";
  color: #fff;

  cursor: pointer;
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 70px;
  right: 100px;

  z-index: 1;
`;
