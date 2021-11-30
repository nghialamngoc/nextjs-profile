import React from "react";
import dynamic from "next/dynamic";

const NoSsr = (props: any) => {
  return <>{props.children}</>;
};

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
