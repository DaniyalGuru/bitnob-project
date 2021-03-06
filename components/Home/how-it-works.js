import { homeData } from 'static';
import { 
  BitNobContainer, 
  BitNobLink, 
} from '../'
import styles from 'styles/Home.module.css'
import className from 'classnames'

const HowItWorks = () => {
    const { howItWorks } = homeData;

    return(
        <div className="relative mt-60">
            <div 
                className=" max-w-xs md:max-w-xl lg:max-w-md xl:max-w-3xl 2xl:max-w-5xl right-0 h-60 lg:h-80 xl:h-80 w-full bg-cover bg-no-repeat -top-32 sm:-top-40 absolute" 
                style={{backgroundImage:`url(${howItWorks.cover})`}} />
            <BitNobContainer className="px-0 md:px-6">
                <div className="bg-bitGreen-50 xl:mt-48 rounded-2xl px-6 md:px-10 lg:px-20 pb-16 pt-52 md:pt-60 lg:pt-10">
                    <div className="flex space-x-10 items-center sm:mt-40 mt-0">
                        <h2 className="font-bold text-2xl lg:text-3xl text-black font-gordita">{howItWorks.heading}</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-10 sm:mt-20 xl:mt-16 space-y-10 lg:space-y-0 lg:space-x-10 lg:justify-center mb-10">
                        {
                            howItWorks.list.map(({title, description, icon})=> (
                                <div key={title} className={className(styles.how_hover, "space-y-4 flex-1 cursor-default xl:max-w-xs")}>
                                    <span className="w-16 h-16 border flex justify-center items-center rounded-2xl">{icon}</span>
                                    <h4 className="font-bold pt-4 md:pt-0 text-black text-lg md:text-2xl lg:text-md font-gordita">{title}</h4>
                                    <p className="text-bitGray-300 pb-4 text-2xs lg:text-sm md:pb-2 block font-quicksand">{description}</p>
                                    <BitNobLink href="#" className="font-bold text-2xs lg:text-sm text-bitGreen-500">Learn More</BitNobLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </BitNobContainer>
        </div>
    )
}

export default HowItWorks