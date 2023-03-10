import Head from "next/head";

import { Inter } from "@next/font/google";
import { Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import Projects from "./Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, repo_res }) {
  console.log(repo_res.items);
  return (
    <>
      <Head>
        <title>Rahul Dudka Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          // border: "2px solid",
          width: "100%",
          height: "800px",
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        {/* Homepage */}
        <div
          style={{
            // border: "2px solid red",
            width: "23%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "2px solid teal",
              width: "95%",
              height: "45%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{ width: "45%", borderRadius: "100px" }}
              src={data.avatar_url}
              alt="Rahul D"
            />
            <h3>{data.name}</h3>
            <p>@{data.login}</p>
            <h4>{data.bio}</h4>
            <div
              style={{
                display: "flex",
                width: "80%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "20px",
                }}
              >
                <a href="https://drive.google.com/file/d/1WndJReS9UjQ1N1W9L-NB53CbCtrFRbmp/view">
                  Resume
                </a>
              </button>
              <button
                style={{
                  backgroundColor: "teal",
                  color: "#fff",
                  padding: "10px 25px",
                  borderRadius: "20px",
                }}
              >
                <a href="https://github.com/dRahul97">Follow</a>
              </button>
            </div>
          </div>
          <div
            style={{
              border: "2px solid teal",
              width: "95%",
              height: "auto",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              HTML
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              CSS
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              JavaScript
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              BootStrap
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              React
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              React-Router
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              Redux
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              Heroku
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              Netlify
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              Chakra UI
            </Text>
            <Text
              as="mark"
              padding="5px"
              backgroundColor="orange"
              color="black"
            >
              TypeScript
            </Text>
          </div>
          <div
            style={{
              border: "2px solid teal",
              width: "95%",
              height: "30%",
              margin: "auto",
            }}
          >
            <h3>Experience</h3>
          </div>
          {/* {console.log(data)} */}
        </div>

        {/* Project Page*/}

        <div
          style={{
            border: "2px solid red",
            width: "65%",
            height: "700px",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            // gridTemplateRows: "repeat(100px,300px)",
            gap: "5px",
          }}
        >
          {repo_res.items.map((repo) => (
            <Projects key={repo.id} {...repo} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/users/dRahul97");
  const repo = await fetch(
    "https://api.github.com/search/repositories?q=user:dRahul97+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  const repo_res = await repo.json();

  const data = await res.json();

  return {
    props: {
      data,
      repo_res,
    },
  };
}
