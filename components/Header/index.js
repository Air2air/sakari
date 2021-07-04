import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../public/logo/sakari-logo.png";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

const initialOpacity = 0.6;

const Header = () => {
  return (
    <Navbar className={styles.navbar}>
      <Container className="d-flex justify-content-around align-items-center">
        <Link href="/allocation">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: initialOpacity }}
            whileHover={{ scale: 1.07, opacity: 1 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <AiFillHome size="2em" />
          </motion.div>
        </Link>

        <motion.div
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.15 }}
          className="d-flex align-items-center"
        >
          <Image src={logo} alt="Sakari" width="140" height="40" />
        </motion.div>

        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: initialOpacity }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <FaUserAlt size="2em" />
          </motion.div>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
