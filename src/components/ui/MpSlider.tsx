"use client"

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, type SliderProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpSliderProps extends SliderProps {
  valueLabelDisplay?: "auto" | "on" | "off"
}

export default function MpSlider({ valueLabelDisplay = "auto", ...props }: MpSliderProps) {
  return (
    <Slider {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  )
}

MpSlider.propTypes = {
  valueLabelDisplay: PropTypes.oneOf(["auto", "on", "off"]),
}
