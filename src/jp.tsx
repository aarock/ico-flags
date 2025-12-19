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
        <Path d="M12 17.218a5.217 5.217 0 1 0 0-10.435 5.217 5.217 0 0 0 0 10.435Z" fill="#D80027" />
    </G>
</Svg>