import {Routes, Route} from "react-router-dom";
import { Home, AboutUs, Products, Contact, ProductDescription } from "../pages";

export const AllRoutes = () => {
    const products = [
        {
            id: 0,
            code: "OP/MO-9871288763za",
            img: "../assets/images/pd/Monoblock-pump.webp",
            name: "Monoblock Pump",
            desccription: "QIZ series horizontal centrifugal monoblock pump is the pump for clean water and the other liquids physically and chemically similar to the clean water. ",
            features: [
                'Discharge : up to 20 inch',
                'H(Head): up to 154 m',
                'HP: up to 160 kw ',
                'Capacities: up to 1450 m³/h ',

            ]
        },
        {
            id: 1,
            code: "OP/SSP-9876243254va",
            img: "../assets/images/pd/kmsing.webp",
            name: "KM Single Stage Pump",
            description: "centrifugal pumps are very common type of pump , used and refers to one of the main three families of pumps.KM is a single-stage centrifugal pump consists of one impeller rotating on a shaft within a pump casing which is designed to produce fluid flow when driven by a motor. Impeller design is changed to accommodate clean, dirty and solid laden liquids, with several mechanical seal types to accommodate variations in applications. It is one of the simplest designs of pumps available and many variations in design exist to satisfy the duty requirements of applications.",
             features: [
                'Discharge:  DN 32…DN 400 mm',
                'Q(Flow) : up to 3600 m3/hr',
                'H(Head): up to 100 m',
                'Speed : 1450 – 2920 rpm ',
                'Temp. :-10 -- +140 C',
                'Body Pressure :16 bar',
                'Voltage: 380 V , 50 Hz '
            ]
        },
        {
            id: 2,
            img: "../assets/images/pd/sew.webp",
            code: "OP/SP/9876310952sa",
            name: "KMW Sweage Pump",
            description: "KMW series submersible sewage pumps are designed to pump liquids with large sized solids. These pumps can pump liquids with large solids without clogging. They are available with different versions for installation in dry pit or wet pit pump type pump stations.",
            features: [
                'Discharge: DN50 … DN250 mm ',
                'Q (flow) : up to 1000 m3/hr ',
                'H(head) : up to 50 m ',
                'Speed : 950- 1450 --2920 rpm ',
                'TEMP. : 40 C',
                'Body pressure  :16 bar ',
                ' Voltage :380 V , 50 Hz '
            ]
        },
        {
            "id": 3,
            code: "OP/ADP/9877825312aa",
            "img": "../assets/images/pd/AWN-dredger-pump-6.webp",
            "name": "AWN Dredger Pump",
            description: "The AWN slurry pump for dredgers is single stage single suction, horizontal cantilevered centrifugal pump. specially designed for mud, sand dredging application in rivers or seas. Robust structure design with front disassemble way guarantees its extra- long work - life and easy maintenance.",
            features: [
                'Discharge : up to 40 inch',
                'H(Head): up to 75 m',
                'HP: up to 1500 kw ',
                'Capacities: up to 25000 m³/h ',

            ]

        },
        {
            "id": 4,
            code: "OP/SSP/9870981531pa",
            "img": "../assets/images/pd/impeller.webp",
            "name": "Slurry Pump Parts",
            description: "An Pump Machinery could manufacture high chrome slurry pump parts and rubber slurry pump parts fully compatible with slurry pumps from different companies.SPP slurry pump spare parts for our pumps and other brands.",
            features: [
                'Impeller: The impeller is the core part of the slurry pump accessories',
                'Bearing Assembly:The bearing assembly belongs to the rotating part of the slurry pump, and mainly consists of shafts, bearing box, bearings, sleeves, rings and other parts.',
                'Volute casing',
                'Throat bush',
            ]
        },
        {
            "id": 5,
            code: "OP/HDP/9874526152da",
            "img": "../assets/images/pd/heavy-duty-slurry-pump.webp",
            "name": "Heavy Duty Pump",
            description: "Better pumping solutions in mining & mineral processing, gravel, sand, dredging industry, power plants. Slurry pump flow part material selections are key in the different slurries applications.Natural rubber and high chromium alloys most common",
            features: [
                'Impeller: The impeller is the core part of the slurry pump accessories',
                'Bearing Assembly:The bearing assembly belongs to the rotating part of the slurry pump, and mainly consists of shafts, bearing box, bearings, sleeves, rings and other parts.',
                'Volute casing',
                'Throat bush',
            ]
        },
        {
            id: 6,
            code:"OP/TOP/9872329102wa",
            img: "../assets/images/pd/thermal.webp",
            name: "KTM Thermal Oil Pump",
            description: "Thermal oil pumps capable of handling temperatures up to 350˚C in heat transfer plants without the necessity for external cooling of the pump.The fluids pumped must have lubricating properties and should not contain any solids or particles, as the non drive end bearing and mechanical seal is lubricated by the pumped liquid. The unique heat dissipation design of the bearing housing ensures a reduced temperature at the mechanical seal faces and the bearings.Back pull out for ease of maintenance. These pumps are further equipped with a safety stuffing box and throttling area in front of the mechanical seal.In case of a seal failure this prevents the pumped liquid from emerging in a hazardous quantity or manner.With drain connection adequate piped up, the safety requirements of DIN 4754 are exceeded. (The pumps have a drain connection to ensure that any seepage past the shaft sealing can be safely drained through this connection). High temperature bearings are fitted where applicable. Pump flanges according to PN 16 EN 1092-1. No special motor or coupling guard required due to unique heat dissipation design.",
            features: [
                'Discharge: DN 32 … DN 125 mm ',
                'Q (flow) : up to 400 m3/hr ',
                'H(head) : up to 90 m ',
                'Speed : 1500-- 2920 rpm ',
                'TEMP. : up to 350 C ',
                'Body pressure : 16 bar ',
                'Voltage : 380 V , 50 Hz '
            ]
        },
        {
            id: 7,
            code: "OP/CP/9873421092ra",
            img: "../assets/images/pd/kmc.webp",
            name: "KMC Circulating Pump",
            description: "KMC is circulation pump  specific type of pump used to circulate , liquids, or slurries in a closed circuit. They are commonly found circulating water in a hydronic heating or cooling system. Because they only circulate liquid within a closed circuit, they only need to overcome the friction of a piping system (as opposed to lifting a fluid from a point of lower potential energy to a point of higher potential energy).",
            features: [
                'Discharge : DN40  … DN 200 mm ',
                'Q (flow) : up to 500 m3/hr ',
                'H(head): up to 95 m ',
                'Speed: 1000 -1450 - 2920 rpm ',
                'TEMP.: -10 -- + 140 C  ',
                'Body pressure: 16 bar ',
                'voltage: 220 V , 50 Hz / 380 V , 50 Hz '

            ]
        },
        {
            id: 8,
            code: "OP/VP/98643320171ta",
            "img": "../assets/images/pd/9.webp",
            "name": "KMV Vacuum Pump",
            description:"A vacuum pump is a device that draws gas molecules from a sealed volume in order to leave behind a partial vacuum. The job of a vacuum pump is to generate a relative vacuum within a capacity. ",
            features: [
                'Discharge : DN 25 … DN 100 mm ',
                'Q (flow) : up to 570 m3/hr ',
                'Speed: 1450 --2920 rpm ',
                'Vacuum pressure : 735 mmHg ',
                'Voltage : 220 V , 50 Hz / 380 V , 50 Hz ',
                
            ]
        },
        {
            "id": 9,
            code: "OP/VMP/9867891235pa",
            "img": "../assets/images/pd/kvm.webp",
            "name": "KVM Vertical Multistage Pump",
            description: "A vertical multistage pump is originally a centrifugal pump containing two or more impellers. The impellers could be mounted on the same shaft or on different shafts, but for the majority if pumps they are on the same shaft.The fluid flows into the inlet of the pump casing where it flows into the eye of the impeller. The impeller is driven & rotated by mechanical means such as an electric motor or engine etc.The rotation of the impeller creates centrifugal force which directs the fluid along the impeller vane and pushes the fluid to the outer tip of the impeller vane where it enters the stage diffuser.The diffusers are a type of cut water which direct the fluid into the suction eye of the next impeller. This process continues until the fluid has passed through each impeller stage. The fluid is then directed out the pump casing through a final diffuser and into the pump discharge.Each stage that the fluid passes through increases the discharge pressure.When you want a higher pressure you need to use a multistage pumps which single stage pumps of same size can not achieve it.",
            features: [
                'Discharge : DN 25… DN100 mm  ',
                'Q (flow) :  up to 300 m3/hr  ',
                'H(head):  up to 450 m  ',
                'Speed: 1450--2920 rpm ',
                'TEMP.:  -10 -- +120C   ',
                'Body pressure: 50 bar ',
                'voltage: 220 V, 50 Hz /380 V , 50 Hz  '

            ]
        },
        {
            "id": 10,
            code: "OP/ITB/9870023123oa",
            "img": "../assets/images/pd/kbs.webp",
            "name": "KBS Industrial Typle Booster",
            description: "A booster pump is a machine which will increase the pressure of a fluid. İt could be used with liquids or gases, with construction details depending on the fluid. A gas booster is similar to a gas compressor, but generally a simpler mechanism which often has only a single stage of compression, and is used to increase pressure of a gas already above ambient pressure. Two-stage boosters are also made. Boosters could be used for increasing gas pressure, transferring high pressure gas, charging gas cylinders and scavenging.",
            features: [
                'Discharge : DN 32… DN150 mm  ',
                'Q (flow) :  up to 400 m3/hr  ',
                'H(head):  up to 200 m  ',
                'Speed: 2920 rpm ',
                'TEMP.:  -10 -- +140C   ',
                'Body pressure: 30 bar ',
                'voltage: 380 V , 50 Hz  '

            ]

        },
        {
            "id": 11,
            code: "OP/SCP/9875219261fa",
            "img": "../assets/images/pd/split-case-pump.webp",
            "name": "Split Case Pump",
            description: "SCP Split Case pump is a split case pump and the diesel engine is connected by flexible couplings. axially split case centrifugal pump use double suction impeller, and pump has the advantage of high capacity, high pressure, widely used in industrial water supply and fire fighting.",
            features: [
                'Discharge : up to 48 inch',
                'H(Head): up to 108 m',
                'HP: up to 1250 kw ',
                'Capacities: up to 1400 m³/h ',
            ]

        },
        {
            "id": 12,
            code: "OP/SSSP/9875421022ya",
            "img": "../assets/images/pd/kmr.webp",
            "name": "KMR Stainless Steel Submersible Pump",
            description: "KMR IS A STAINLESS STEEL Submersible Pumps is designed to produce more work with less energy and higher efficiency.it provide a long life and a stable performance with high quality material and special production characteristics. Their reliable design reduces the lifetime cost (life cycle cost) and allows them to run economically.",
            features: [
                'Discharge : DN 25… DN150 mm  ',
                'Q (flow) :  up to 300 m3/hr  ',
                'H(head):  up to 400 m  ',
                'Speed: 2920 rpm ',
                'TEMP.: 40C   ',
                'Body pressure: 60 bar ',
                'voltage: 220 V , 50 Hz / 380 V , 50 Hz  '

            ]
        },
        {
            "id": 13,
            code: "OP/DP/9867210207ia",
            "img": "../assets/images/pd/dpp.webp",
            "name": "DPP Domestic Pump",
            description: "Domistic pumps are used for clean water , It’s not suitable for Heavy liquid. Domistic pumps are economical, low maintenance, reliable and easy to use.they are suitable for domestic and civil applications and particular in the fields of automatic distribution of water from surge tanks, transferring water, watering gardens.Those pumps should be installed in a covered area, protected against the weather.",
            features: [
                'Discharge : DN 25… DN 50 mm  ',
                'Q (flow) :  up to 4 m3/hr  ',
                'H(head):  up to 55 m  ',
                'Speed: 2950 rpm ',
                'TEMP.: 60C   ',
                'Body pressure: 10 bar ',
                'voltage: 220 V , 50 Hz   '

            ]
        },
        {
            "id": 14,
            code: "OP/GDP/9875210873ua",
            "img": "../assets/images/pd/grandsu.webp",
            "name": "Grandsu Dosing Pump",
            description: "Grandsu Dosing Pump are ideal compact pumps for fertilizer dosing suitable for crops, greenhouses, horticulture, ornamental plants, landscaping and golf courses. ",
            features: [
                'Q (flow) :  160 to 1200 l/h for piston models, and 100 to 1800 l/h for diaphragm models ',
                'Body pressure: 20 bar  ',
                'voltage: 220 V , 50 Hz / 380 V , 50 Hz  '

            ]
        },
        // {
        //     id: 15,
        //     img: "./assets/images/pd/vertical-slurry-pump.webp",
        //     name: "Vertical Centrifugal Sump Slurry Pump"
        // },
        // {
        //     "id": 16,
        //     "img": "./assets/images/pd/submersible-slurry-pump.webp",
        //     "name": "Submersible Slurry Pump"
        // }
    ]
    return(
        <>
        
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Products" element={<Products products={products} />} />
                    <Route path="/ContactUs" element={<Contact />} />
                     <Route path="/product/:id" element={<ProductDescription products={products} />} />
                </Routes>
       
           
        </>
    )
}