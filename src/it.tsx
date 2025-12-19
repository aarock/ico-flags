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
        <Path d="M24 12c0-5.16-3.257-9.56-7.826-11.255v22.507C20.744 21.557 24 17.159 24 11.999Z"
            fill="#D80027" />
        <Path d="M0 12c0 5.16 3.256 9.558 7.826 11.253V.746C3.256 2.442 0 6.84 0 12Z" fill="#6DA544" />
    </G>
</Svg>