import React, { useEffect } from "react";
import mainImage from "../assets/CoverImage1.jpg";
import mainImage2 from "../assets/mainImage2.jpg";
import mainImage3 from "../assets/mainImage3.jpg";
// import mainImage4 from "../assets/mainImage4.jpg";
import mainImage5 from "../assets/mainImage51.jpg";
import NewCover from "../assets/Newcover.jpg";

import adio from "../assets/Mangalyam.mp3";
import ReactPlayer from "react-player";
import maps from "../assets/map2.png";
import groomInvi from "../assets/FamilyInvitation2.pdf";
import brideInvi from "../assets/FriendsInvitation2.pdf";

function Mainpage() {
  useEffect(() => {
    const textElements = document.querySelectorAll(".messages");

    let currentIndex = 0;

    function showNextText() {
      if (currentIndex === 1) {
        textElements[currentIndex].classList.remove("active");
        clearInterval(myInterval);
        document.getElementById("blinkArea").style.display = "none";
        document.getElementById("contentArea").style.display = "block";
      } else {
        textElements[currentIndex].classList.remove("active");
        currentIndex = currentIndex + 1;
        textElements[currentIndex].classList.add("active");
      }
    }

    textElements[currentIndex].classList.add("active");
    const myInterval = setInterval(showNextText, 3000);

    var countDownDate = new Date("Mar 10, 2025").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Mar 10, 2025";
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
      clearInterval(x);
    };
  }, []);
  return (
    <div className="container lg:w-2/3 bg-white bgTexture min-h-screen rounded relative">
      <div
        id="blinkArea"
        className="flex  flex-col justify-center items-center h-screen"
      >
        <ReactPlayer
          className="audio"
          width={0}
          height={0}
          url={adio}
          playing={true}
          volume={0.2}
          stopOnUnmount={false}
        />
        <p className="messages text-[#8162a2] text-1xl font-medium text-center">
          Dear Family and Friends, <br /> We Invited You
        </p>

        <p className="messages text-[#8162a2] text-1xl font-medium text-center">
          To Our <br /> Wedding Ceremony
        </p>
      </div>
      <div id="contentArea">
        <p className="text-center mb-3 text-[#8162a2] font-medium">
          With the grace and blessings of our families, we are delighted to
          announce the union of two hearts destined to meet. As we embark on
          this beautiful journey together, we invite you to join us in
          celebrating the beginning of a lifelong commitment filled with love,
          respect, and togetherness. Your presence will make this moment even
          more memorable.
        </p>

        <p className="text-center mb-3 text-[#8162a2]">&#x2764; &#x2764; </p>
        <div className="w-full h-56 lg:h-full my-0 mx-auto relative">
          <img
            src={NewCover}
            className="w-full h-full object-cover rounded-md"
          />
          <p className="text-center mb-1 text-white font-bold text-3xl lg:text-4xl absolute bottom-0 w-full">
            We Are Getting Married
          </p>
          <div className="bg-[#000000a1] absolute w-full h-full top-0 rounded-md"></div>
        </div>
        <div className="m-4 text-center text-[#8162a2] font-semibold">
          <h2 className="mb-2">
            <p className="text-xs">We are waiting for.....</p>
            <p className="text-xl">Celebrate Our Love</p>
          </h2>
          <div id="defaultCountdown" className="hasCountdown">
            {/* <p className="countdown_row flex flex-wrap gap-2" id="timer"></p> */}
            <p
              class="countdown_row flex flex-wrap gap-2 justify-center"
              id="timer"
            >
              <div className="w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded">
                <span id="days"></span> <span class="block">Days</span>
              </div>{" "}
              <div className="w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded">
                <span id="hours"></span> <span class="block">Hours</span>
              </div>{" "}
              <div className="w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded">
                {" "}
                <span id="minutes"></span> <span class="block">Minutes</span>
              </div>{" "}
              <div className="w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded">
                <span id="seconds"></span> <span class="block">Seconds</span>
              </div>{" "}
            </p>
          </div>
        </div>

        <div className=" mt-3 ">
          <p className="text-[#8162a2] font-semibold border-b-2 mb-2">
            Event Details
          </p>
          <div className="bg-[#8162a2] p-2 rounded bgCardTexture font-semibold">
            <p className="text-white text-center text-sm">
              &#10084; RECEPTION &#10084;
            </p>
            <p className="text-center text-white mt-2 text-sm font-semibold">
              09-Mar-2025 @ 7:00 PM Onwards
            </p>
            <a
              className="text-right text-white block mt-2 text-xs "
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250309T133000Z%2F20250309T160000Z&details=We%20look%20forward%20to%20sharing%20this%20special%20day%20with%20you.%20With%20love%20and%20gratitude%2C&location=https%3A%2F%2Fmaps.app.goo.gl%2F6K9nGKyVEVYoqbmv9&text=Gogul%20%26%20Sandhiya%20Wedding"
            >
              {" "}
              Add to calendar{" "}
            </a>
          </div>
          <div className="bg-[#8162a2] p-2 rounded bgCardTexture mt-3 font-semibold">
            <p className="text-white text-center text-sm">
              &#10084; MARRIAGE &#10084;
            </p>
            <p className="text-center text-white mt-2 text-sm">
              10-Mar-2025 @ 5:40 AM Onwards
            </p>
            <a
              className="text-right text-white block mt-2 text-xs "
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250310T000000Z%2F20250310T010000Z&details=We%20look%20forward%20to%20sharing%20this%20special%20day%20with%20you.%20With%20love%20and%20gratitude%2C&location=https%3A%2F%2Fmaps.app.goo.gl%2F6K9nGKyVEVYoqbmv9&text=Gogul%20%26%20Sandhiya%20Wedding"
            >
              {" "}
              Add to calendar{" "}
            </a>
          </div>
        </div>
        <div className="bg-[#8162a2] text-white p-2 rounded bgCardTexture mt-3 font-semibold">
          <p className="text-center text-sm">&#10084; LOCATION &#10084;</p>
          <a href="https://maps.app.goo.gl/6K9nGKyVEVYoqbmv9">
            <div className=" flex gap-2 items-center md:flex-col">
              <div className="w-2/3 lg:w-16">
                <img
                  src={maps}
                  className="rounded"
                  // style={{ height: "90px" }}
                ></img>
              </div>
              <div className="text-white text-sm">
                <p>Bojjelaru Mahal, Edapadi Road, Komarapalayam</p>
                <p className="text-right text-white text-xs "> View Location</p>
              </div>
            </div>
          </a>
        </div>
        <div className=" mt-3  ">
          <p className="text-[#8162a2] font-semibold border-b-2 mb-2">
            Download Invitation
          </p>
          <div className="flex justify-center gap-3 pt-3 ">
            {/* <a
              href={groomInvi}
              target="_blank"
              className="bg-[#8162a2] hover:bg-[#9b72c6] w-24 text-white py-2 px-3 rounded-md flex flex-col gap-1 cursor-pointer justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="none"
                stroke="white"
                stroke-width="40"
                version="1.1"
                id="Capa_1"
                width="40px"
                height="40px"
                viewBox="0 0 959.415 959.415"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path d="M75.194,458.44c28.9-1,52-6.899,70.5-15c20.1,12.8,43.9,20.2,69.5,20.2s49.4-7.4,69.5-20.2c18.4,8.2,41.5,14,70.5,15 c7.1,0.3,11.899-7.3,8.6-13.6c-7-13.5-15.7-37-15.7-70.6c0-56.2-1.899-189.8-132.9-189.8c-131,0-132.9,133.6-132.9,189.8 c0,33.5-8.7,57-15.7,70.6C63.294,451.14,68.094,458.74,75.194,458.44z" />
                    <path d="M35.094,735.439h287.4l1.1-6.399c5.5-31.801,22.101-60.7,46.7-81.5c9.3-7.801,19.5-14.301,30.4-19.4 c-4.2-3.2-8.101-6.7-11.9-10.5c-23.5-23.5-36.4-54.7-36.4-87.9c0-0.3,0-0.699,0-1c-29.899-22.6-67.1-35.8-107-35.8h-60.5 c-86.4,0-160.3,62.2-175,147.4l-9.4,54.2C-3.105,715.939,13.395,735.439,35.094,735.439z" />
                    <path d="M949.495,640.34c-14.7-85.2-88.601-147.4-175-147.4h-60.5c-42.601,0-82.101,15.101-113,40.601 c-1.101,38.3-19.9,72.5-48.4,94.6c10.9,5.1,21.2,11.6,30.601,19.5c24.699,20.8,41.199,49.7,46.699,81.5l1.101,6.4h293.399 c21.7,0,38.2-19.601,34.5-40.9L949.495,640.34z" />
                    <path d="M600.595,735.439l-0.2-1.3c-6.3-36.8-31-66.4-63.6-80.3c-12.9-5.5-27-8.5-41.7-8.5h-36.4c-12.601,0-24.801,2.2-36.101,6.3 c-35.399,12.7-62.6,43.6-69.3,82.5l-0.2,1.3l-4.6,26.7c-2.601,15.3,9.1,29.2,24.6,29.2h207.601c15.5,0,27.3-14,24.6-29.2 L600.595,735.439z" />
                    <path d="M403.195,588.739c17.3,21.5,43.8,35.301,73.6,35.301c0.4,0,0.9,0,1.3,0c51.5-0.7,93.3-43.4,93-94.9 c-0.2-34.7-19.2-65-47.3-81.2c-14.9-8.6-27.4-20.8-35.8-35.7c-3.2-5.6-6.101-12-8.401-18.899c-0.5-1.4-1.7-2.101-2.899-2.101 c-1.2,0-2.4,0.7-2.9,2.101c-2.3,6.899-5.2,13.2-8.4,18.899c-8.5,15.101-21.199,27.301-36.199,36 c-28.101,16.301-46.9,46.7-46.9,81.6c0,13.6,2.9,26.5,8,38.2C393.794,575.439,398.094,582.439,403.195,588.739z" />
                    <path d="M740.995,461.24c72.7,0,131.6-58.899,131.6-131.6v-129.7c0-21-20-36.3-40.3-30.7l-160.3,44.2 c-37,10.2-62.601,43.8-62.601,82.2v34C609.395,402.34,668.295,461.24,740.995,461.24z" />
                  </g>
                </g>
              </svg>
              Family
            </a> */}
            <a
              href={brideInvi}
              target="_blank"
              className="bg-[#8162a2] hover:bg-[#9b72c6] w-24 text-white py-2 px-3 rounded-md flex flex-col gap-1 cursor-pointer justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="none"
                stroke="white"
                stroke-width="4"
                version="1.1"
                id="Capa_1"
                width="40px"
                height="40px"
                viewBox="0 0 124.018 124.018"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path d="M81.589,26.73c4.063,1.865,8.375,3.901,8.443,3.933c0.651,0.308,1.342,0.454,2.019,0.454c1.769,0,3.464-1,4.271-2.706    c1.114-2.359,0.107-5.176-2.252-6.29c-0.177-0.083-1.887-0.891-4.129-1.937C88.1,23.305,85.13,25.678,81.589,26.73z" />
                    <path d="M31.722,31.119c0.677,0,1.364-0.146,2.016-0.456c0.067-0.031,4.281-2.022,8.305-3.871    c-3.594-0.998-6.623-3.346-8.515-6.467c-2.09,0.977-3.66,1.717-3.826,1.796c-2.36,1.115-3.368,3.932-2.255,6.29    C28.253,30.118,29.952,31.119,31.722,31.119z" />
                    <circle cx="77.732" cy="13.092" r="13.092" />
                    <circle cx="46.158" cy="13.092" r="13.092" />
                    <path d="M96.86,34.783c-0.011-0.012-0.022-0.02-0.034-0.031l-1.228-1.469l-1.115-1.116c-0.801,0.421-1.696,0.665-2.629,0.665    c-0.84,0-1.656-0.183-2.421-0.544c-0.07-0.034-5.329-2.518-9.703-4.511l-2.001,1.83l-2.641-2.487    c-0.547-0.092-1.085-0.209-1.61-0.361c-1.091,0.495-2.391,1.17-3.734,1.963c0.099-0.578,0.095-1.163-0.021-1.732    c0.598-0.348,1.186-0.668,1.762-0.973c-3.082-1.408-5.579-3.864-7.046-6.913c-0.812,0.494-1.609,0.998-2.369,1.513    c-1.111-0.637-2.183-1.244-3.025-1.721c-1.421,3.076-3.884,5.565-6.939,7.021c2.5,1.302,8.585,4.673,10.274,5.864    c0.369,0.26,0.769,0.439,1.176,0.581v24.643c0,2.118,0.34,4.133,0.976,5.973c-0.019,0.196-0.029,0.394-0.029,0.593v5.535h0.035    c-0.002,0.081-0.022,0.155-0.022,0.237l0.003,48.669c0,3.316,2.688,6.006,6.007,6.006c3.316,0,6.007-2.689,6.007-6.007    l-0.004-48.67c0-0.081-0.021-0.155-0.023-0.235h0.903c-0.004,0.079-0.024,0.154-0.024,0.234l-0.003,48.67    c0,3.316,2.688,6.006,6.006,6.007c3.317,0,6.006-2.688,6.006-6.006l0.006-48.669c0-0.082-0.021-0.156-0.025-0.236h0.146    c0.449,0.881,1.157,1.643,2.093,2.149c0.772,0.42,1.604,0.619,2.425,0.619c1.804,0,3.549-0.96,4.47-2.654    C107.712,52.291,102.694,41.149,96.86,34.783z M91.566,60.169l0.294-15.055C93.621,48.433,94.403,53.162,91.566,60.169z" />
                    <path d="M50.155,26.694c-0.456,0.14-0.922,0.258-1.396,0.354l-2.717,2.559l-2.002-1.831c-4.376,1.994-9.633,4.478-9.706,4.511    c-0.765,0.361-1.577,0.544-2.42,0.544c-0.931,0-1.826-0.243-2.625-0.665l-1.951,2.123c-0.059,0.057-0.126,0.101-0.181,0.161    c-5.833,6.365-10.852,17.508-1.643,34.437c0.921,1.694,2.666,2.655,4.469,2.655c0.82,0,1.654-0.199,2.424-0.619    c0.811-0.442,1.436-1.083,1.886-1.817h0.087c-0.001,0.049-0.014,0.094-0.014,0.145l0.002,48.669c0,3.317,2.688,6.006,6.005,6.006    c3.318,0,6.008-2.688,6.008-6.007l-0.002-48.669c0-0.05-0.013-0.095-0.014-0.144h0.885c-0.001,0.049-0.016,0.094-0.016,0.144    l-0.004,48.669c0,3.318,2.688,6.007,6.007,6.007s6.007-2.688,6.007-6.006l0.004-48.669c0-0.049-0.013-0.096-0.014-0.145h0.035    v-5.533c0-0.201-0.012-0.398-0.031-0.595c0.638-1.84,0.978-3.854,0.978-5.973V31.66c-1.159-0.008-2.274-0.363-3.225-1.033    C54.685,29.001,52.06,27.545,50.155,26.694z M31.869,45.369v2.472l0.273,11.183C29.834,52.855,30.386,48.515,31.869,45.369z" />
                  </g>
                </g>
              </svg>
              Friends
            </a>
          </div>
        </div>
        <div className=" mt-3 ">
          <p className="text-[#8162a2] font-semibold border-b-2 mb-2">
            Contact Details
          </p>
          <div className="">
            <div className="mb-2">
              <div className="flex  items-end mb-1 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#8162a2"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 442.99 442.99"
                  xml:space="preserve"
                >
                  <g>
                    <path d="M289.817,349.052c-4.168-1.609-8.783-1.251-12.654,0.984l-38.723,22.354c-3.819-3.582-8.938-5.794-14.576-5.794h-4.767   c-5.637,0-10.756,2.212-14.575,5.794L165.8,350.037c-3.872-2.235-8.485-2.594-12.657-0.984c-4.173,1.611-7.35,4.978-8.715,9.237   c-3.864,12.046-5.823,24.573-5.823,37.234s1.959,25.188,5.823,37.234c1.366,4.26,4.543,7.627,8.716,9.238   c1.723,0.665,3.52,0.994,5.31,0.994c2.544,0,5.073-0.666,7.347-1.978l38.723-22.355c3.819,3.581,8.937,5.793,14.574,5.793h4.767   c5.637,0,10.755-2.212,14.574-5.793l38.724,22.355c2.273,1.313,4.802,1.978,7.347,1.978c1.789,0,3.587-0.329,5.309-0.994   c4.173-1.61,7.351-4.977,8.718-9.237c3.863-12.043,5.822-24.571,5.822-37.235s-1.959-25.191-5.823-37.236   C297.167,354.029,293.99,350.663,289.817,349.052z M161.661,420.308c-2.03-8.095-3.057-16.404-3.057-24.784   s1.026-16.689,3.057-24.784l36.09,20.835v7.897L161.661,420.308z M225.209,403.104c0,0.742-0.604,1.345-1.346,1.345h-4.767   c-0.742,0-1.345-0.604-1.345-1.345v-15.163c0-0.742,0.604-1.345,1.345-1.345h4.767c0.742,0,1.346,0.604,1.346,1.345V403.104z    M281.301,420.308l-36.092-20.836v-7.895l36.092-20.836c2.029,8.093,3.056,16.402,3.056,24.784   C284.357,403.906,283.33,412.215,281.301,420.308z" />
                    <path d="M170.485,198.835c-5.523,0-10,4.477-10,10v16.752c0,5.523,4.477,10,10,10s10-4.477,10-10v-16.752   C180.485,203.313,176.008,198.835,170.485,198.835z" />
                    <path d="M272.48,198.835c-5.522,0-10,4.477-10,10v16.752c0,5.523,4.478,10,10,10s10-4.477,10-10v-16.752   C282.48,203.313,278.002,198.835,272.48,198.835z" />
                    <path d="M239.864,273.293c-4.91,4.91-11.438,7.614-18.383,7.614s-13.473-2.704-18.383-7.615c-3.905-3.905-10.237-3.905-14.143,0   c-3.905,3.905-3.905,10.237,0,14.143c8.688,8.688,20.239,13.472,32.526,13.472c12.286,0,23.838-4.785,32.525-13.473   c3.905-3.905,3.905-10.237,0-14.142C250.1,269.388,243.77,269.388,239.864,273.293z" />
                    <path d="M374.485,233.45c0-14.196-6.242-27.224-16.797-36.004c6.675-11.839,10.288-25.318,10.288-39.271v-36.473   C367.976,54.596,313.38,0,246.273,0h-49.584C129.581,0,74.986,54.596,74.986,121.703v36.473c0,13.959,3.616,27.443,10.297,39.287   c-10.543,8.78-16.777,21.801-16.777,35.988c0,23.575,17.479,43.137,40.157,46.426c6.031,15.064,15.109,28.895,26.93,40.716   c22.94,22.939,53.444,35.573,85.895,35.573c51.014,0,94.777-31.614,112.743-76.277C356.956,276.64,374.485,257.058,374.485,233.45z    M94.986,121.703C94.986,65.534,140.519,20,196.688,20h49.585c56.169,0,101.703,45.534,101.703,101.703v36.473   c0,8.382-1.757,16.529-5.021,24.006v-20.206c0-2.669-0.927-5.303-2.782-7.222c-3.04-3.146-7.633-3.913-11.442-2.14   c-14.299,6.663-29.626,10.041-45.557,10.041c-32.062,0-62.156-14.151-82.591-38.353c-7.191-8.516-11.923-18.907-13.052-29.996   c-0.05-0.489-0.094-0.984-0.131-1.484c-0.413-5.508-5.225-9.641-10.719-9.225c-5.507,0.413-9.638,5.212-9.225,10.719   c0.783,10.454,3.663,19.188,5.983,24.75c-16.259,18.5-39.234,29.743-63.93,31.08c-5.323,0.288-9.502,4.658-9.502,9.988v22.046   c-3.264-7.477-5.021-15.623-5.021-24.004V121.703z" />
                  </g>
                </svg>
                <p>Groom</p>
              </div>

              <p className="text-sm p-1 hover:bg-[#efeef0] ">
                Mobile: <a href="tel:+918072175233">+91 80721 75233</a>
              </p>
              <p className="text-sm p-1 hover:bg-[#efeef0]">
                Mail: <a href="mailto:gogul305@gmail.com">gogul305@gmail.com</a>
              </p>
            </div>
            <div>
              <div className="flex  items-end mb-1 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#8162a2"
                  width="30px"
                  height="30px"
                  viewBox="0 0 512 512"
                  id="Capa_1"
                  version="1.1"
                  xml:space="preserve"
                >
                  <g>
                    <path d="M300.7,177.6c-7.4,7.4-19.4,7.4-26.8,0c-2-2-5.1-2-7.1,0c-2,2-2,5.1,0,7.1c5.6,5.6,13,8.5,20.5,8.5   c7.4,0,14.8-2.8,20.5-8.5c2-2,2-5.1,0-7.1C305.8,175.6,302.6,175.6,300.7,177.6z" />

                    <path d="M269.4,221.9c-7.4,7.4-19.4,7.4-26.8,0c-2-2-5.1-2-7.1,0c-2,2-2,5.1,0,7.1c5.6,5.6,13,8.5,20.5,8.5   c7.4,0,14.8-2.8,20.5-8.5c2-2,2-5.1,0-7.1C274.5,220,271.3,220,269.4,221.9z" />

                    <path d="M245.2,177.6c-2-2-5.1-2-7.1,0c-7.4,7.4-19.4,7.4-26.8,0c-2-2-5.1-2-7.1,0c-2,2-2,5.1,0,7.1c5.6,5.6,13,8.5,20.5,8.5   s14.8-2.8,20.5-8.5C247.1,182.7,247.1,179.5,245.2,177.6z" />

                    <path d="M468.3,325.8L363.6,137.9c-3.6-25.3-13.9-47-30.3-63.7c-19.8-20-47.2-31.1-77.3-31.1c-30.1,0-57.5,11-77.3,31.1   c-16.4,16.7-26.7,38.4-30.3,63.7L43.7,325.8c-1,1.7-0.8,3.8,0.4,5.4c1.2,1.6,3.2,2.3,5.1,1.9l43.7-9.8l20.6,32.4v108.2   c0,2.8,2.2,5,5,5s5-2.2,5-5V354.2v-0.9v-9.1c0-6.6,1.3-12.8,3.5-18.6l38.2,32.8c-6.1,8.8-9.4,19.2-9.4,30.1c0,11.2,3,21.2,8.6,29   v46.4c0,2.8,2.2,5,5,5s5-2.2,5-5v-34.2c7.4,9.3,15.3,21.3,15.3,34.2c0,2.8,2.2,5,5,5h122.8c2.8,0,5-2.2,5-5   c0-12.8,7.8-24.7,15.2-34v34c0,2.8,2.2,5,5,5s5-2.2,5-5v-46.2c5.7-7.9,8.7-17.9,8.7-29.2c0-10.9-3.3-21.3-9.4-30.1l38.2-32.8   c2.3,5.8,3.5,12.1,3.5,18.7v6.4v3.5v109.7c0,2.8,2.2,5,5,5s5-2.2,5-5V354.2v-5.6v-4.4c0-33.8-27.5-61.4-61.4-61.4h-47.4v-22.7   c12.8-9.4,24.2-24.1,32.5-42.7l35.7,15.3c1.5,0.7,3.3,0.5,4.7-0.4c1.4-0.9,2.2-2.5,2.2-4.2V161l89.1,159.9l-36.2-8.1   c-2.1-0.5-4.2,0.4-5.3,2.2l-5,7.9c-1.5,2.3-0.8,5.4,1.5,6.9c2.3,1.5,5.4,0.8,6.9-1.5l3.2-5l43.7,9.8c1.9,0.4,3.9-0.3,5.1-1.9   S469.2,327.5,468.3,325.8z M113.8,337.6l-14.4-22.6c-1.1-1.8-3.3-2.7-5.3-2.2l-36.2,8.1L147,161v67.3c0,1.7,0.8,3.3,2.2,4.2   c1.4,0.9,3.2,1.1,4.7,0.4l35.7-15.3c8.4,18.6,19.7,33.2,32.5,42.7v22.7h-47.4C143.2,282.9,117.2,306.8,113.8,337.6z M171.6,350.8   C171.6,350.8,171.6,350.8,171.6,350.8l-40-34.4c4.2-6.6,9.9-12.1,16.6-16.2l24.2,49.7c0,0,0,0,0,0   C172.2,350.3,171.9,350.5,171.6,350.8z M190.5,373.7c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5s-2.2,5-5,5   C192.7,378.7,190.5,376.5,190.5,373.7z M201.4,418.6c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5   C206.4,416.4,204.1,418.6,201.4,418.6z M222.8,445.3c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S225.5,445.3,222.8,445.3z M224.4,398.9   c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C229.4,396.7,227.1,398.9,224.4,398.9z M282.6,393.9c0-2.8,2.2-5,5-5s5,2.2,5,5   c0,2.8-2.2,5-5,5S282.6,396.7,282.6,393.9z M289.2,445.3c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S292,445.3,289.2,445.3z    M310.6,418.6c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C315.6,416.4,313.4,418.6,310.6,418.6z M316.5,378.7   c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S319.3,378.7,316.5,378.7z M380.4,316.5l-40,34.3c0,0,0,0,0,0c-0.3-0.3-0.5-0.5-0.8-0.8   c0,0,0,0,0,0l24.2-49.7C370.4,304.3,376.1,309.9,380.4,316.5z M332.3,292.9h4.9c6.2,0,12.1,1.1,17.5,3.1l-23.3,47.9   c-8.3-5.2-17.8-8-27.8-8c-14.1,0-27.3,5.5-37.2,15.4c-4.4,4.4-7.9,9.4-10.4,14.8c-2.6-5.4-6.1-10.4-10.4-14.8   c-9.9-9.9-23.2-15.4-37.2-15.4c-10,0-19.6,2.8-27.8,8L157.3,296c5.5-2,11.4-3.1,17.5-3.1h4.9c19.3,20.1,46.4,32.7,76.3,32.7   C286,325.6,313.1,313,332.3,292.9z M300.9,292.9c-13.1,8-28.4,12.7-44.9,12.7s-31.8-4.7-44.9-12.7h16.1c2.8,0,5-2.2,5-5   c0,0,0,0,0,0v-21.5c7.7,3.8,15.7,5.8,23.8,5.8c8.1,0,16.1-2,23.8-5.8v21.5c0,2.8,2.2,5,5,5H300.9z M315.1,209.1   c-13.4,32.8-36.1,53.1-59.1,53.1c-23,0-45.7-20.4-59.1-53.1c-5.4-13.1-8.7-27.2-9.8-41c17.4-3.4,33.5-12,45.9-24.9   c14.6,10,31.7,15.2,49.5,15.2c14.8,0,29.3-3.7,42.2-10.7c0.3,3.5,0.5,7.1,0.5,10.8C325.3,175.3,321.7,192.8,315.1,209.1z    M355,220.7l-18.4-7.9l-10.5-4.5c6-16.1,9.1-33.2,9.1-49.7c0-6.9-0.6-13.6-1.7-19.9c-0.3-1.7-1.4-3.1-3-3.7   c-1.6-0.7-3.3-0.5-4.7,0.4c-12.9,8.6-27.8,13.1-43.3,13.1c-17.2,0-33.5-5.5-47.2-15.8c-2.1-1.6-5.1-1.3-6.8,0.7   c-12.2,14-29.1,23.1-47.4,25.6c-2.6,0.4-4.4,2.6-4.3,5.2c0.6,14.7,3.7,29.9,9,44.1L157,220.7v-62.2c0-1.4,0-2.9,0.1-4.3   c0-0.2,0-0.5,0-0.7c0.1-1.4,0.1-2.9,0.2-4.3c0,0,0,0,0-0.1c0.2-3,0.5-6,0.9-9c3.2-23.5,12.6-43.7,27.7-59   c17.9-18.1,42.8-28.1,70.1-28.1c27.4,0,52.3,10,70.1,28.1c0,0,0,0,0,0c15.1,15.3,24.5,35.5,27.7,59c0.6,4.4,1,8.8,1.1,13.4   c0,0.2,0,0.4,0,0.6c0,1.4,0.1,2.9,0.1,4.3V220.7z" />
                  </g>
                </svg>

                <p>Bride</p>
              </div>

              <p className="text-sm p-1 hover:bg-[#efeef0] ">
                Mobile: <a href="tel:+919123589039">+91 91235 89039</a>
              </p>
              <p className="text-sm p-1 hover:bg-[#efeef0]">
                Mail:{" "}
                <a href="mailto:sandhiyasarathi13@gmail.com">
                  sandhiyasarathi13@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <footer className="py-3 pb-0 text-[#8162a2]">
          <p className="text-xs font-medium text-center">
            We look forward to sharing this special day with you.
            <br /> With love and gratitude.
          </p>
          <p className="text-center text-black text-xs  font-medium mt-1">
            &#x2764; &#x2764; Gogul & Sandhiya &#x2764; &#x2764;
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Mainpage;
