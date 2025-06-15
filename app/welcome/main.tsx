import React from "react"
import profile from "../assets/pfp.jpeg"
import linkedin from "../assets/linkedin.png"
import git from "../assets/github.png"
import mail from "../assets/mail.jpg"
import {Grid, GridItem, Center } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"


export function Main() {
  return (<div className="">
    <Grid className="grid-cols-3 gap-2">
      {/*grid box 1*/}
      <GridItem className="bg-red-500">
        
        grid box 1
      </GridItem>

      {/*grid box 2*/}
      <GridItem className="bg-blue-400">
        
        grid box 2    
      </GridItem>

      {/*grid box 3*/}
      <GridItem className="bg-yellow-300">
        grid box 3
      </GridItem>

      {/*grid box 4*/}
      <GridItem className="bg-red-500">
      </GridItem>

      {/*grid box 5*/}
      <GridItem className="">
                  {/*subgrid box 2*/}
          <Grid className="grid-cols-3 gap-4 ">

            <GridItem>
              {/* Profile Picture*/}
              <Center className="p-2 hover:px-0">
                <div className="rounded-full p-1 hover:p-2 bg-white">
                <img src={profile} alt="Icon" className="h-20 w-20 rounded-full " />
                </div>
              </Center>
            </GridItem>

            <GridItem colSpan={2}>
                <Grid className="grid-rows-3 pt-4">
                  <GridItem><h1 className="text-[#ffffff]">Samuil Iordachi</h1></GridItem>
                  <GridItem><h2 className="text-[#939393]">CS Student @UMN </h2></GridItem>
                  <GridItem><p  className="text-[#565656]">Specializing in ML and DS </p></GridItem>
                </Grid>
            </GridItem>
            
            <GridItem className=" ">
              <Center>
                <Button size="sm" className="bg-white rounded-4xl p-2 border-black border-2 text-black hover:bg-gray-500 "> 
                <img src={linkedin} className="h-4 w-4"></img>
                </Button>
                </Center>
            </GridItem>

            <GridItem className="">
              <Center>
                <Button size="sm" className="bg-white rounded-4xl p-2 border-black border-2 text-black hover:bg-gray-500 "> 
                <img src={git} className="h-4 w-4"></img>
                </Button>
                </Center>
            </GridItem>

            <GridItem className="">
              <Center>
                <Button size="sm" className="bg-white rounded-4xl p-2 border-black border-2 text-black hover:bg-gray-500 "> 
                <img src={mail} className="h-4 w-4"></img>
                </Button>
                </Center>
            </GridItem>

            <GridItem>
            </GridItem>

          </Grid>
      </GridItem>

      {/*grid box 6*/}
      <GridItem className="bg-yellow-300">
        
      </GridItem>

      {/*grid box 7*/}
      <GridItem className="bg-red-500">
        grid box 7
      </GridItem>

      {/*grid box 8*/}
      <GridItem className="">

        {/*Subgrid 2 box 8 */}
        <Grid className="grid-cols-3">

          <GridItem >
            <h1 className="text-[#e6e6e6]">Solventum</h1>
            <p className="text-[#9b9999]"> SWE Intern</p>
            <p className="text-[#737373]"> May 2025 - August 2025</p>
          </GridItem>
          <GridItem colSpan={2}>
            <p className="text-[#939393]">• Worked with a team of senior engineers to architect and develop a full-stack web app built with Pythons Dash framework and visualization and data science libraries such as Pandas, Numpy, Scipy, and Plotly.</p>
            <p className="text-[#939393]">• Built visualization and mathematical modeling tools to support research scientists allowing for a 500\% reduction in manual labor and a centralized database of scientific data.</p>
            <p className="text-[#939393]">• Utilized FastAPI, AWS EC2 and S3 to build out a backend and DynamoDB for database storage.</p>
          </GridItem>

        </Grid>

      </GridItem>

      {/*grid box 9*/}
      <GridItem className="bg-yellow-300">
        grid box 9
      </GridItem>

    </Grid>
  </div>)
}
