import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const LaLibertad = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("lalibertad", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="La Libertad" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="M 241.781204 141.591522 L 244.251205 140.621521 L 246.281204 141.761536 L 246.791199 141.531525 L 247.121201 139.271515 L 248.691193 137.65152 L 249.021194 135.131531 L 249.921204 133.91153 L 251.101196 133.64151 L 252.961197 134.621521 L 254.731201 134.611511 L 258.031189 133.131531 L 261.881195 129.39151 L 265.25119 128.871521 L 266.491211 128.821533 L 267.671204 129.711517 L 268.371185 134.65152 L 268.861206 135.331512 L 270.031189 135.41153 L 271.971191 134.541534 L 273.201202 134.741516 L 274.25119 133.631531 L 275.081207 133.471527 L 276.361206 134.131531 L 277.291199 136.681519 L 278.221191 137.381531 L 278.221191 137.381531 L 278.341187 138.481537 L 277.00119 139.601532 L 276.671204 140.91153 L 274.911194 141.761536 L 274.941193 144.231537 L 273.891205 147.89151 L 273.641205 148.231537 L 272.841187 147.981537 L 272.181213 148.751526 L 272.481201 150.751526 L 271.951202 152.281525 L 274.77121 157.031525 L 275.411194 157.251526 L 276.681213 156.64151 L 278.651215 158.621521 L 279.191193 158.881531 L 280.101196 158.341522 L 281.231201 161.311523 L 282.931213 162.451538 L 283.181213 163.211517 L 282.77121 163.621521 L 280.971191 164.081512 L 280.331207 164.791534 L 280.991211 166.751526 L 287.121185 169.421509 L 294.461212 170.621521 L 295.0112 171.921509 L 295.211212 175.501511 L 294.77121 177.771515 L 291.75119 179.841522 L 291.541199 183.201523 L 289.671204 184.691513 L 288.951202 192.961517 L 287.52121 198.961517 L 285.741211 204.101517 L 284.481201 209.851517 L 281.881195 215.061523 L 282.621185 219.841522 L 278.831207 232.691513 L 276.971191 237.021515 L 275.75119 238.371521 L 276.201202 239.161514 L 277.091187 239.531509 L 281.361206 237.721512 L 282.571198 237.981522 L 282.131195 240.331512 L 278.861206 243.781509 L 278.831207 245.071518 L 279.421204 246.031509 L 278.231201 247.001511 L 278.371185 247.831512 L 281.841187 248.781509 L 288.491211 251.701523 L 289.211212 252.771515 L 290.441193 258.051514 L 291.381195 260.191528 L 291.981201 261.171509 L 295.101196 263.181519 L 295.721191 264.071503 L 295.121185 265.16153 L 292.601196 265.731506 L 291.921204 266.271515 L 290.941193 268.521515 L 290.401215 271.89151 L 290.541199 272.711517 L 291.27121 273.111511 L 294.431213 273.14151 L 296.841187 274.221527 L 296.741211 274.871521 L 294.431213 277.121521 L 293.411194 279.781525 L 293.791199 282.531525 L 292.711212 284.65152 L 292.961212 287.271515 L 294.961212 290.191528 L 295.941193 292.521515 L 295.331207 297.471527 L 293.421204 300.461517 L 292.741211 302.551514 L 292.691193 304.471527 L 295.621185 310.761505 L 297.071198 312.851501 L 297.921204 316.341522 L 300.401215 318.701508 L 300.661194 320.731506 L 299.971191 322.481506 L 300.061188 323.41153 L 301.50119 324.321503 L 304.77121 324.65152 L 308.171204 325.781525 L 309.25119 324.871521 L 309.111206 322.281525 L 309.731201 321.181519 L 309.221191 320.571503 L 309.461212 320.011505 L 314.931213 319.931519 L 314.931213 319.931519 L 315.161194 321.941528 L 314.561188 325.311523 L 316.581207 325.861511 L 322.0112 324.971527 L 322.671204 325.361511 L 322.741211 326.241516 L 321.171204 331.931519 L 320.361206 333.261505 L 318.381195 335.381531 L 315.681213 336.521515 L 315.75119 337.181519 L 316.661194 337.681519 L 317.071198 338.741516 L 315.311188 342.711517 L 315.311188 342.711517 L 311.111206 339.941528 L 308.411194 339.301514 L 302.371185 336.261505 L 301.921204 335.16153 L 299.851196 334.971527 L 295.791199 332.211517 L 285.791199 327.881531 L 284.801208 327.15152 L 284.711212 326.501526 L 283.00119 326.501526 L 271.821198 321.801514 L 270.831207 320.971527 L 267.221191 320.241516 L 264.341187 320.611511 L 263.711212 320.051514 L 261.27121 320.051514 L 260.101196 321.90152 L 259.02121 322.451508 L 257.941193 321.531525 L 252.621201 320.15152 L 250.551193 321.071503 L 248.031204 319.131531 L 245.861206 318.40152 L 241.901199 318.491516 L 239.921204 317.66153 L 238.561203 318.301514 L 237.301193 317.291504 L 236.311203 317.941528 L 235.051193 318.031525 L 233.521194 317.66153 L 231.711197 317.66153 L 230.451202 317.291504 L 228.201202 318.40152 L 224.151199 317.201508 L 222.611206 317.751526 L 220.091202 317.291504 L 218.561203 317.011505 L 213.691193 315.731506 L 211.891205 316.371521 L 210.271194 316.65152 L 202.701202 315.821503 L 201.621201 316.191528 L 201.341202 316.741516 L 198.101196 317.481506 L 194.671204 317.66153 L 192.241196 316.65152 L 189.271194 314.991516 L 187.831207 314.991516 L 184.941193 314.90152 L 182.331207 313.701508 L 180.081207 313.421509 L 178.361206 313.061523 L 176.291199 312.591522 L 171.961197 312.41153 L 171.691193 311.771515 L 170.791199 311.491516 L 170.341202 311.861511 L 168.631195 311.671509 L 167.641205 310.571503 L 164.391205 309.351501 L 164.391205 309.351501 L 170.7612 304.40152 L 175.991196 297.65152 L 182.681198 291.311523 L 183.641205 289.511505 L 184.711197 282.64151 L 185.671204 279.771515 L 188.501205 276.501526 L 190.201202 273.751526 L 193.571198 271.66153 L 195.961197 268.771515 L 196.281204 266.271515 L 194.811203 251.241516 L 195.331207 248.251511 L 196.941193 247.01152 L 198.641205 246.411514 L 207.841202 245.131516 L 208.911194 241.531509 L 211.031204 240.65152 L 212.041199 238.39151 L 213.921204 236.721512 L 215.961197 236.221512 L 216.561203 237.061523 L 217.901199 237.311523 L 218.701202 236.471512 L 219.221207 234.571518 L 221.651199 234.081512 L 223.321198 230.40152 L 223.091202 227.40152 L 222.391205 226.591522 L 220.831207 226.411514 L 218.031204 225.111511 L 218.031204 225.111511 L 217.831207 221.301514 L 216.251205 219.90152 L 214.971207 216.571518 L 216.971207 214.531509 L 218.651199 214.041519 L 220.001205 213.001511 L 220.571198 211.041519 L 220.191193 209.691513 L 220.841202 209.291519 L 220.471207 208.271515 L 221.631195 204.39151 L 220.141205 199.821518 L 220.931198 198.861511 L 220.351196 193.931519 L 217.921204 186.461517 L 219.231201 184.271515 L 218.501205 182.39151 L 219.911194 180.501511 L 220.291199 178.64151 L 221.401199 177.471512 L 222.381195 177.991516 L 222.811203 177.731522 L 223.891205 175.251511 L 225.271194 175.061523 L 225.931198 173.801514 L 228.931198 173.471527 L 235.181198 167.981537 L 238.211197 167.291534 L 239.441193 166.16153 L 239.411194 164.321533 L 238.241196 162.191528 L 238.551193 159.481537 L 237.741196 157.011536 L 239.331207 153.311523 L 240.871201 153.221527 L 241.351196 151.811523 L 242.541199 150.961517 L 242.381195 148.341522 L 240.691193 147.181519 L 240.481201 146.551514 L 242.121201 143.40152 L 242.201202 142.111511 Z"
        title="La Libertad"
        id="SV-LI"
      />
    </Tooltip>
  );
};

export default LaLibertad;