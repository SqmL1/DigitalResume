import React from "react"
import profile from "../assets/pfp.jpeg"
import {Grid, GridItem, Center } from "@chakra-ui/react"


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
      <GridItem className="bg-blue-400">
                  {/*subgrid box 2*/}
          <Grid className="grid-cols-3 gap-4 ">

            <GridItem>
              {/* Profile Picture*/}
              <Center>
                <div className="rounded-full p-1 bg-white">
                <img src={profile} alt="Icon" className="h-20 w-20 rounded-full" />
                </div>
              </Center>
            </GridItem>

            <GridItem colSpan={2}>
              <Center>
                <h1 className="text-neutral-950">Samuil Iordachi</h1>
                <p></p>
              </Center>
              rrrr
            </GridItem>

            
            something
            
            <GridItem className=" ">
              <Center><button className="bg-white rounded-4xl p-2 border-black border-2 text-black"> Button 1</button></Center>
            </GridItem>

            <GridItem className="">
              <Center><button className="bg-white rounded-4xl p-2 border-black border-2  text-black"> Button 2</button></Center>
            </GridItem>

            <GridItem className="">
              <Center><button className="bg-white rounded-4xl p-2 border-black border-2  text-black"> Button 3</button></Center>
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
      <GridItem className="bg-blue-400">
        grid box 8
      </GridItem>

      {/*grid box 9*/}
      <GridItem className="bg-yellow-300">
        grid box 9
      </GridItem>

    </Grid>
  </div>)
}
