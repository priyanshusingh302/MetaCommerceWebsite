import React from "react";
import "./assets/css/common.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Avatar3 from "./assets/images/avatar3.gif";
import CreateMeta from "./assets/images/CreateMeta.gif";
import { Link } from "react-router-dom";
export default function Home() {
  function GotoMetaverse() {
    window.location.assign("https://stellar-donut-7119ad.netlify.app/");
  }
  return (
    <div style={{ marginTop: "4rem" }}>
      {/* <!-- ======= Hero Section ======= --> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wp.technologyreview.com/wp-content/uploads/2022/06/Infosys_Metaverse_AR_VR_1200_675.jpeg"
            alt="First slide"
            style={{ height: "75vh", objectFit: "cover" }}
          />
          <div class="layer"></div>
          <Carousel.Caption>
            <h3>Welcome to Meta-Creativity</h3>
            <p>
              The leading software that allows you to create, rig, and animate
              your own voxel-based NFTs. Sell them on The Sandbox's marketplace
              and discover a new world.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperforu.com/wp-content/uploads/2022/01/Wallpaper-League-Of-Legends-Kda-Riot-Games-Ah-291920x1200.jpg"
            alt="First slide"
            style={{ height: "75vh", objectFit: "cover" }}
          />
          <div class="layer"></div>

          <Carousel.Caption>
            <h3>Create Own Your Avatar</h3>
            <p>
              Create your own diffrent avatar. and make your avatar collection
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://beaconvc.fund/wp-content/uploads/metaverse-cover.jpeg"
            alt="First slide"
            style={{ height: "75vh", objectFit: "cover" }}
          />
          <div class="layer"></div>

          <Carousel.Caption>
            <h3>Welcome to the Marketplace</h3>
            <p>
              Discover Collections, get Equipment, or find assets to build your
              own unique Experiences.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={{ backgroundColor: "#0F101F" }}>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6}>
              <h1 className="mt-5" style={{ color: "white" }}>
                Cross-game Avatar
              </h1>
              <h1 style={{ color: "white" }}>Platform for the Metaverse</h1>
              <br />
              <h5 style={{ color: "white" }}>
                One avatar, many worlds to explore.
              </h5>
              <br />
              <Button
                variant="info"
                style={{ color: "#0F101F", backgroundColor: "#00FFF" }}
                size="lg"
              >
                <Link
                  to="/CreateAvatar"
                  style={{ textDecoration: "none", color: "#0F101F" }}
                >
                  {" "}
                  Create Avatar{" "}
                </Link>
              </Button>{" "}
            </Col>

            <Col>
              <br />
              <video
                preload="auto"
                width="300rem"
                height=""
                controls
                loop
                style={{ borderRadius: "50px" }}
              >
                <source src="./avatar.mp4" type="video/mp4" />
              </video>
              <br />
              <br />
            </Col>
            <Col>
              <br />
              <video
                preload="auto"
                width="300rem"
                height=""
                controls
                loop
                style={{ borderRadius: "50px" }}
              >
                <source src="./avatar2.mp4" type="video/mp4" />
              </video>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "6rem",
          }}
        >
          <h1> Explore Metaverse With Own 3D Avatar</h1>
          <br />
        </div>
        <img
          src="https://wolf3d.io/images/wolf3d-3d-avatars-readyplayerme.webp"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ backgroundColor: "#0F101F" }}>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col>
              <br />
              <img
                src="https://uploads-ssl.webflow.com/6166f095fa264878624ae673/617aff74fe891e53494d5dc2_Scene_03_v5_00000.jpg"
                style={{
                  width: "17rem",
                  height: "25rem",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
              />
            </Col>
            <Col>
              <br />
              <img
                src="https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png"
                style={{
                  width: "17rem",
                  height: "25rem",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
              />
            </Col>

            <Col xs={6}>
              <h1 className="mt-5" style={{ color: "white" }}>
                Visit Marketplace
              </h1>
              <h1 style={{ color: "white" }}>Platform for the Metaverse</h1>
              <br />
              <h5 style={{ color: "white" }}>
                One avatar, many worlds to explore.
              </h5>
              <br />
              <Button
                variant="info"
                style={{ color: "#0F101F", backgroundColor: "#00FFF" }}
                size="lg"
                onClick={GotoMetaverse}
              >
                Dive into Metavere
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#0F101F", padding: "3rem" }}>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col>
              <h1 className="mt-5" style={{ color: "white" }}>
                Visit Marketplace
              </h1>
              <h1 style={{ color: "white" }}>Platform for the Metaverse</h1>
              <br />
              <h5 style={{ color: "white" }}>
                One avatar, many worlds to explore.
              </h5>
              <br />
              <Button
                variant="info"
                style={{ color: "#0F101F", backgroundColor: "#00FFF" }}
                size="lg"
                onClick={GotoMetaverse}
              >
                Dive into Metavere
              </Button>{" "}
            </Col>
            <Col>
              <img
                style={{ width: "90%", borderRadius: "50px" }}
                src={Avatar3}
                loop
              ></img>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="background">
        <div class="layer1"></div>
      </div>

      {/* // <!-- ======= Footer ======= --> */}
      <footer id="footer" style={{ backgroundColor: "#0F101F" }}>
        <div class="container">
          <h3>Meta-Creativity</h3>
          <p>A Metaverse everyone can explore.</p>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>MetaCreativity</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
