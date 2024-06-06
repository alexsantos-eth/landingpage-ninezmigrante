import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Cuscatlan = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("cuscatlan", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Cuscatlán" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="M 319.871185 132.781525 L 320.541199 131.64151 L 322.00119 130.571533 L 322.931213 130.671509 L 323.691193 132.281525 L 326.621185 134.981537 L 326.571198 136.771515 L 328.181213 137.701538 L 329.211212 139.171509 L 330.581207 139.481537 L 331.531189 140.601532 L 332.991211 141.361511 L 333.581207 140.601532 L 332.131195 138.981537 L 332.651215 137.691528 L 334.531189 138.361511 L 336.041199 137.071533 L 336.831207 137.16153 L 338.701202 138.66153 L 339.311188 138.681519 L 340.111206 140.261536 L 342.081207 138.211517 L 341.811188 140.39151 L 344.171204 140.181519 L 344.821198 140.741516 L 343.231201 141.631531 L 341.951202 143.481537 L 345.601196 143.15152 L 343.52121 145.701538 L 343.851196 146.351532 L 347.921204 146.181519 L 347.201202 144.421509 L 348.5112 144.14151 L 348.7612 143.041534 L 349.191193 143.211517 L 349.131195 145.41153 L 349.831207 145.90152 L 349.131195 147.121521 L 350.101196 147.551514 L 350.5112 146.711517 L 350.981201 146.681519 L 352.951202 148.491516 L 352.821198 149.321533 L 353.731201 150.801514 L 353.151215 151.071533 L 351.381195 150.381531 L 350.551208 149.441528 L 349.5112 149.581512 L 349.061188 150.021515 L 348.571198 153.111511 L 346.171204 154.15152 L 346.081207 154.921509 L 347.561188 155.311523 L 349.581207 154.231537 L 350.341187 155.811523 L 350.841187 155.581512 L 351.151215 154.231537 L 352.821198 155.041534 L 353.381195 154.41153 L 355.101196 153.90152 L 355.231201 154.511536 L 354.371185 155.791534 L 355.311188 156.361511 L 355.301208 157.331512 L 353.151215 158.701538 L 354.301208 159.15152 L 356.181213 158.40152 L 357.7612 160.431519 L 357.151215 162.561523 L 355.621185 164.171509 L 355.931213 164.531525 L 357.691193 164.441528 L 358.50119 165.841522 L 358.381195 168.101532 L 357.151215 170.41153 L 359.881195 168.011536 L 360.441193 168.301514 L 360.451202 169.14151 L 361.531189 170.501526 L 363.161194 170.811523 L 362.921204 171.531525 L 363.791199 173.681519 L 365.891205 175.381516 L 365.121185 179.531509 L 367.151215 176.431519 L 367.741211 176.671509 L 368.661194 178.601517 L 367.661194 182.101517 L 369.491211 180.601517 L 370.52121 177.541519 L 371.951202 177.541519 L 374.2612 181.031509 L 374.77121 180.711517 L 373.27121 176.631516 L 373.551208 175.051514 L 372.441193 174.481537 L 368.631195 173.921509 L 368.731201 173.051514 L 369.931213 172.591522 L 370.871185 172.771515 L 372.071198 171.091522 L 373.691193 170.831512 L 373.831207 171.201538 L 372.611206 171.681519 L 372.961212 172.16153 L 374.121185 171.951538 L 373.211212 173.771515 L 374.661194 174.091522 L 375.191193 174.701538 L 376.2612 173.761536 L 376.671204 172.551514 L 378.041199 173.041534 L 377.431213 171.451538 L 377.741211 169.791534 L 381.371185 170.791534 L 381.371185 170.791534 L 376.621185 179.681519 L 370.491211 185.611511 L 369.711212 189.201523 L 369.681213 193.89151 L 370.171204 193.881516 L 372.541199 196.781509 L 377.781189 200.841522 L 380.441193 202.341522 L 382.491211 201.821518 L 383.341187 202.071518 L 385.25119 204.171509 L 388.5112 206.64151 L 389.601196 210.631516 L 389.421204 212.541519 L 390.101196 213.521515 L 391.77121 214.301514 L 393.141205 215.681519 L 393.921204 220.01152 L 395.141205 220.271515 L 397.631195 219.811523 L 400.25119 220.751511 L 406.701202 226.121521 L 408.101196 228.581512 L 409.25119 229.301514 L 410.141205 229.301514 L 410.141205 229.301514 L 410.561188 229.89151 L 411.561188 236.701523 L 409.711212 238.251511 L 409.671204 240.931519 L 407.631195 242.191513 L 407.311188 243.311523 L 408.411194 246.031509 L 408.241211 249.301514 L 410.0112 251.881516 L 409.871185 253.521515 L 403.701202 257.021515 L 400.731201 260.65152 L 400.731201 260.65152 L 394.491211 261.541504 L 391.381195 263.031525 L 388.871185 263.611511 L 387.911194 265.121521 L 387.381195 268.231506 L 383.661194 271.231506 L 381.871185 269.951508 L 377.621185 268.021515 L 371.911194 263.691528 L 364.421204 261.821503 L 364.421204 261.821503 L 363.121185 258.961517 L 363.291199 258.451508 L 369.681213 255.471527 L 368.471191 248.201523 L 366.02121 249.591522 L 364.451202 251.201523 L 363.471191 251.061523 L 362.781189 250.101517 L 360.671204 249.14151 L 358.121185 250.201523 L 358.431213 248.661514 L 351.701202 234.931519 L 349.221191 228.241516 L 344.901215 221.821518 L 344.441193 217.941513 L 335.331207 216.121521 L 332.931213 211.911514 L 330.971191 209.681519 L 329.181213 204.621521 L 328.121185 202.911514 L 326.681213 201.631516 L 325.491211 201.221512 L 322.461212 201.931519 L 320.52121 201.751511 L 319.741211 200.781509 L 319.051208 196.911514 L 316.741211 195.851517 L 316.741211 194.911514 L 317.50119 193.801514 L 321.721191 192.191513 L 327.441193 187.111511 L 327.341187 186.461517 L 324.961212 184.251511 L 321.691193 183.221512 L 319.02121 180.481522 L 317.781189 176.521515 L 316.52121 174.821533 L 314.391205 169.91153 L 311.291199 164.461517 L 311.881195 162.431519 L 314.781189 160.451538 L 317.341187 153.271515 L 317.871185 147.571533 L 317.281189 144.291534 L 316.061188 142.881531 L 316.131195 139.971527 L 318.531189 137.061523 Z"
        title="Cuscatlán"
        id="SV-CU"
      />
    </Tooltip>
  );
};

export default Cuscatlan;