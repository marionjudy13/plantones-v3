import React from "react";

const Meter = ({ number, prefix, size }) => {
  return (
    <div class="flex">
      {Array(4)
        .fill()
        .map((object, index) => {
          const count = index + 1;
          return (
            <img
              width={size}
              class="mr-1"
              src={`/${prefix}-${number >= count ? "solid" : "outline"}.svg`}
            />
          );
        })}
    </div>
  );
};

export default Meter;
