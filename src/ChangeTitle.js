import React, { useState, useEffect, useContext } from "react";


export default function ChangeTitle(text) {
  useEffect(() => {
    document.title = (text);
  })
}
