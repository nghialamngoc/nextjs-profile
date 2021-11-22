import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/">
      <a>
        <div className={styles.logobox}>
          <Image src={footPrintImg} width={20} height={20} alt="logo"></Image>
          <Text
            color={useColorModeValue("gray.800", "whiteAlpla.900")}
            fontWeight="bold"
            ml={3}
          >
            Lam Ngoc Nghia
          </Text>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
