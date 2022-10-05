import React, { useState } from "react";
import TitleBlock from "./components/TitleBlock";
import Main from "./components/main/Main";
import Center from "./components/center/Center";
import Layout from "../../components/layout/Layout";
import Button from "../../components/atoms/Buttons/Button/Button";
const bcrypt = require("bcryptjs");
const md5 = require("md5");

export default function Aboute({}) {
  const conponent = (
    <div className="w-full">
      <Center />{" "}
    </div>
  );
  return (
    <Layout title="Home" component={conponent}>
      <TitleBlock />
      <div className="pb-14">
        <Main />
      </div>
      <input className="border-4"></input>

      {/* <form method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
  <input className='hidden' readOnly name="merchantAccount" value="test_merch_n1"/>
  <input className='hidden' readOnly name="merchantAuthType" value="SimpleSignature"/>
  <input className='hidden' readOnly name="merchantDomainName" value="www.market.ua"/>
  <input className='hidden' readOnly name="orderReference" value="DH1664815427"/>
  <input className='hidden' readOnly name="orderDate" value="1415379863"/>
  <input className='hidden' readOnly name="amount" value="1547.36"/>
  <input className='hidden' readOnly name="currency" value="UAH"/>
  <input className='hidden' readOnly name="orderTimeout" value="49000"/>
  <input className='hidden' readOnly name="productName[]" value="Процессор Intel Core i5-4670 3.4GHz"/>
  <input className='hidden' readOnly name="productName[]" value="Память Kingston DDR3-1600 4096MB PC3-12800"/>
  <input className='hidden' readOnly name="productPrice[]" value="1000"/>
  <input className='hidden' readOnly name="productPrice[]" value="547.36"/>
  <input className='hidden' readOnly name="productCount[]" value="1"/>
  <input className='hidden' readOnly name="productCount[]" value="1"/>
  <input className='hidden' readOnly name="clientEmail" value="some@mail.com"/>
  <input className='hidden' readOnly name="merchantSignature" value="cf25e62e27fac8a1ea2a3fa95659f000"/>
  <Button> 
    <input type="submit" value="Payment"/>
    </Button>
</form> */}
    </Layout>
  );
}
