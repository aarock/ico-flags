import { Svg, Path, Defs, ClipPath, G, SvgProps } from "@aarock/ui-core"
export default ( { stroke, ...props }: SvgProps ) => <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    { ...props }>
    <G>
        <Path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            fill="#F0F0F0" />
        <Path d="M12 0C6.84 0 2.442 3.256.746 7.826h22.507C21.558 3.256 17.16 0 12 0Z"
            fill="#A2001D" />
        <Path d="M12 24c5.16 0 9.558-3.256 11.253-7.826H.746C2.442 20.744 6.84 24 12 24Z"
            fill="#0052B4" />
    </G>
</Svg>