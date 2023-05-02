import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./Header"

const Home = (props: { sessionToken: String }) => {
  return <div>{props.sessionToken}</div>
}

export default Home
