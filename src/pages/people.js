import React from "react";
import { Users } from "lucide-react";
import { Page, Card, Flex } from "../components.js";

const Person = ({ img, name }) => (
  <div>
    <img className="shadow-lg rounded-full w-24 h-24" src={img}></img>
    <p className="text-center w-24">{name}</p>
  </div>
);

export default () => (
  <Page>
    <h1><Users/>People</h1>

    <Card>
      <h2 className="text-center">Faculty and Research Staff</h2>
      <Flex>
        <Person img="images/people/akos-ledeczi.jpeg" name="Akos Ledeczi"/>
        <Person img="images/people/brian-broll.jpeg" name="Brian Broll"/>
        <Person img="images/people/gordon-stein.jpeg" name="Gordon Stein"/>
        <Person img="images/people/devin-jean.jpeg" name="Devin Jean"/>
      </Flex>
    </Card>

    <Card>
      <h2 className="text-center">Graduate Students</h2>
      <Flex>
        <Person img="images/people/saman-kittani.jpeg" name="Saman Kittani"/>
        <Person img="images/placeholder.png" name="Gabriel Barnard"/>
        <Person img="images/placeholder.png" name="Tito Ebiwonjumi"/>
      </Flex>
    </Card>

    <Card>
      <h2 className="text-center">Undergraduate Students</h2>
      <Flex>
        <Person img="images/people/tabitha-lee.jpeg" name="Tabitha Lee"/>
        <Person img="images/people/marina-rizk.jpeg" name="Marina Rizk"/>
        <Person img="images/people/marissa-schwarz.jpeg" name="Marissa Schwarz"/>
        <Person img="images/people/eleanor-summerfield.jpeg" name="Eleanor Summerfield"/>
        <Person img="images/people/yizhou-tan.jpeg" name="Yizhou Tan"/>
        <Person img="images/people/siyuan-wang.jpeg" name="Siyuan Wang"/>
        <Person img="images/people/michelle-zhu.jpeg" name="Michelle Zhu"/>
      </Flex>
    </Card>
  </Page>
);
