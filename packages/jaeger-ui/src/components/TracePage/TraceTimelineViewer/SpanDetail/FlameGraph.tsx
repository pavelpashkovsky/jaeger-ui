import React from 'react';
import { FlamegraphRenderer } from "@pyroscope/flamegraph";
// import "@pyroscope/flamegraph/dist/index.css";
import { pyroscopeCPU } from "./TestData";

interface IProps {
  url: string;
}

const FlameGraph = ({ url }: IProps) => {
  
  return (
    <div>
      <FlamegraphRenderer
        profile={pyroscopeCPU}
        viewType="single"
        display="flamegraph"
        showToolbar={false}
      />
    </div>
  );
};

export default FlameGraph;
