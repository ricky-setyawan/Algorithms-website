import { Paper, Typography } from "@material-ui/core";
import { Fragment } from "react";
import Link from "../link";
import classes from "./style.module.css";

export default function Footer() {
  return (
    <Paper className={classes.outer}>
      <div className={`section container ${classes.grid}`}>
        <img src="/logo.png" className={classes.logo} />
        <Typography className={classes.name}>
          &#169; The Algorithms 2021
        </Typography>
        <div className={classes.list}>
          <Link href="https://github.com/TheAlgorithms/">Github</Link>
          <Link href="https://gitter.im/TheAlgorithms/">Gitter</Link>
          <Link href="/#about">What is an algorithm?</Link>
          <Link href="/#about">About Us</Link>
        </div>
        <div className={classes.list}>
          <Link href="/all">All algorithms</Link>
        </div>
      </div>
    </Paper>
  );
}
