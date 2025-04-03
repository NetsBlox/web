import React from "react";
import { Users } from "lucide-react";
import { Page, Card, Flex } from "../components.js";

const Person = ({ img, name }) => (
  <div className="m-4 inline-block">
    <img className="shadow-lg rounded-full w-24 h-24" src={img}></img>
    <p className="text-center w-24">{name}</p>
  </div>
);

export default () => (
  <Page>
    <h1><Users className="h-12 w-12 mr-3 inline-block"/>People</h1>

    <Card>
      <h2 className="text-center">Faculty and Research Staff</h2>
      <Flex>
        <Person img="images/akos-ledeczi.jpeg" name="Akos Ledeczi" />
        <Person img="images/brian-broll.jpeg" name="Brian Broll" />
        <Person img="images/gordon-stein.jpeg" name="Gordon Stein" />
        <Person img="images/devin-jean.jpg" name="Devin Jean" />
      </Flex>
    </Card>

    <Card>
      <h2 className="text-center">Graduate Students</h2>
      <Flex>
        <Person img="images/placeholder.png" name="Saman Kittani" />
        <Person img="images/placeholder.png" name="Gabriel Barnard" />
        <Person img="images/placeholder.png" name="Tito Ebiwonjumi" />
      </Flex>
    </Card>

    <Card>
      <h2 className="text-center">Undergraduate Students</h2>
      <Flex>
        <Person img="images/tabitha-lee.jpeg" name="Tabitha Lee" />
        <Person img="images/marina-rizk.jpeg" name="Marina Rizk" />
        <Person img="images/marissa-schwarz.jpeg" name="Marissa Schwarz" />
        <Person img="images/eleanor-summerfield.jpeg" name="Eleanor Summerfield" />
        <Person img="images/yizhou-tan.jpeg" name="Yizhou Tan" />
        <Person img="images/siyuan-wang.jpeg" name="Siyuan Wang" />
        <Person img="images/michelle-zhu.jpeg" name="Michelle Zhu" />
      </Flex>
    </Card>
  </Page>
);
