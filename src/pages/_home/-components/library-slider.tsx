import type { FrameworkType } from '@/components/cards/types/framework.type'
import LoadingDot from '@/components/loading/LoadingDot'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Marquee from '@/components/ui/marquess'
import { Sparkles } from '@/components/ui/sparkles'
import useFrameworks from '@/query/framework-query'
import { useTheme } from 'next-themes'

const ReviewCard = ({
  frameworkUrl,
  name,
}: {
  frameworkUrl: string
  name: string
}) => {
  return (
    <figure className="relative w-50 overflow-hidden cursor-pointer">
      <div className="flex flex-col items-center gap-2 [&_svg]:size-10">
        <Avatar className="size-16">
          <AvatarImage
            src={`https://web-yoones-api.onrender.com/uploads/framework/${frameworkUrl}`}
            className="w-full h-full object-cover"
          />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <p className="font-medium dark:text-white text-sm">{name}</p>
      </div>
    </figure>
  )
}

function LibrarySlider() {
  const { theme } = useTheme()
  const { data: frameworks = [], isLoading, isError } = useFrameworks()

  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden container">
        {isError ? (
          <div className="mt-32 container">
            <p className="text-2xl lg:text-3xl text-center">
              Error loading frameworks
            </p>
          </div>
        ) : isLoading ? (
          <div className="flex justify-center items-center mt-32 container">
            <LoadingDot className={{ dot: 'dark:bg-white bg-primary' }} />
          </div>
        ) : (
          <div className="mt-32 container">
            <div className="bg-clip-text bg-gradient-to-b from-primary dark:from-white-title to-primary/80 dark:to-blue-title font-semibold text-transparent text-2xl lg:text-3xl text-center">
              My experience with various
              <br />
              Frameworks & Libraries
            </div>
            {frameworks.length > 0 ? (
              <div className="relative flex flex-col justify-center items-center bg-transparent py-20 w-full h-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {frameworks.map((framework: FrameworkType) => (
                    <ReviewCard key={framework.id} {...framework} />
                  ))}
                </Marquee>
              </div>
            ) : (
              <p className="text-2xl lg:text-3xl text-center">
                No frameworks found
              </p>
            )}
          </div>
        )}
        <div className="after:top-1/2 after:-left-1/2 before:absolute after:absolute relative before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] after:bg-secondary before:opacity-100 -mt-42 lg:-mt-38 after:border-t after:border-border after:rounded-[100%] w-screen after:w-[200%] h-96 after:aspect-[1/0.7] overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="top-0 right-0 bottom-0 left-0 absolute bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>

          <Sparkles
            density={800}
            speed={1}
            size={1.1}
            mousemove={true}
            color={theme === 'dark' ? '#fff' : '#0f1c35'}
            className="bottom-0 absolute inset-x-0 w-full h-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>
    </>
  )
}

export default LibrarySlider
