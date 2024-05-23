import Image from "next/image";
import { useRouter } from 'next/router'
import { servicePageData } from "@/data/servicePageData";
import RingSvg from "@/components/svg/RingSvg";
import ArrowSvg from "@/components/svg/ArrowSvg";
import SmallCircle from "@/components/svg/SmallCircle";
import CircleSvg from "@/components/svg/CircleSvg";
import ServCount from "@/components/ServCount";



export default function ServicesSublinks() {
  const router = useRouter()
  const id = router.query.serviceId

  let data;

  if (id === 'business-process-management') {
    data = servicePageData.bpmData
  } else if (id === 'digital-transformation') {
    data = servicePageData.digitalData
  } else if (id === 'azure') {
    data = servicePageData.cloudData
  } else if (id === 'business-consulting') {
    data = servicePageData.consultingData
  } else if (id === 'dev-ops') {
    data = servicePageData.devopsData
  } else if (id === 'salesforce') {
    data = servicePageData.salesforceData
  } else if (id === 'aws') {
    data = servicePageData.awsData
  } else if (id === 'microsoft-technology-solutions') {
    data = servicePageData.microsoftData
  } else if (id === 'appian') {
    data = servicePageData.appianData
  } else if (id === 'sap') {
    data = servicePageData.sapData
  } else if (id === 'pega') {
    data = servicePageData.pegaData
  } else if (id === 'rba') {
    data = servicePageData.rbaData
  } else if (id === 'automation-anywhere') {
    data = servicePageData.automationData
  } else if (id === 'ui-path') {
    data = servicePageData.uipathData
  }

  console.log('data: ', data);


  return (
    <div className="relative container mx-auto overflow-hidden py-20">
      <div className="absolute top-16">
        <RingSvg />
      </div>
      <div className="absolute top-44 left-1 ">
        <ArrowSvg />
      </div>
      <div className="absolute transform translate-x-96 top-20 left-10 ">
        <SmallCircle />
      </div>
      <h1 className="text-center text-[64px] font-medium ">{data?.bannerTitle }</h1>

      <div className="absolute top-28 right-96 translate-x-32">
        <CircleSvg />
      </div>

      <div className='grid lg:grid-cols-1 gap-10  px-20 py-20 container relative  mx-auto'>
        <div data-aos='fade-right' data-aos-delay='200' data-aos-once='true'>
          <Image data-aos='zoom-in' src={data?.img} className=' w-full h-[400px]  rounded-lg' />
        </div>
        <div className='flex flex-col gap-4 container mx-auto '>
          <h2 data-aos='fade-left' data-aos-delay='300' data-aos-once='true' className=' text-[30px] font-medium lg:text-center text-center '>{data?.headerOne}
          </h2>
          <p data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='text-gray-500 text-[17px] lg:text-start text-justify' >{data?.paraOne}</p>
          <p data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='text-gray-500 text-[17px] lg:text-start text-justify'>{data?.paraTwo}</p>
          <p data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='text-gray-500 text-[17px] lg:text-start text-justify'>{data?.paraThree}</p>
          <p data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='text-gray-500 text-[17px] lg:text-start text-justify'>{data?.paraFour}</p>
          <p data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='text-gray-500 text-[17px] lg:text-start text-justify'>{data?.paraFive}</p>
          <p data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='text-gray-500 text-[17px] lg:text-start text-justify'>{data?.paraSix}</p>

        </div>
      </div>

      {
        data?.countData &&
        <div className='px-14 container mx-auto pb-10' >
          <ServCount countData={data.countData} />
        </div>
      }

    </div>
  )
}