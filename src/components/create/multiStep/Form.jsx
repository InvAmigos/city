import React, { useEffect, useState } from "react"
import Image from "next/image"

import BackgroundSidebar from "../../../../public/assets/images/bg-sidebar-desktop.svg"
import BackgroundSidebarMobile from "../../../../public/assets/images/bg-sidebar-mobile.svg"
import advancedLogo from "../../../../public/assets/images/icon-advanced.svg"
import arcadeLogo from "../../../../public/assets/images/icon-arcade.svg"
import proLogo from "../../../../public/assets/images/icon-pro.svg"
import Addons from "./Addons"
import Plan from "./Plan"
import Step from "./Step"
import Summary from "./Summary"
import Thankyou from "./Thankyou"
import YourInfo from "./YourInfo"

const Form = () => {
  //------------------------------STATES------------------------------
  const [stepNumber, setStepNumber] = useState(() => 1)
  const [goBackVisible, setGoBackVisible] = useState("invisible")
  const [steps, setSteps] = useState([
    { id: 1, title: "CREATE EVENT", active: true },
    { id: 2, title: "PICK INVITATION", active: false },
    { id: 3, title: "INVITE", active: false },
    { id: 4, title: "SUMMARY", active: false },
  ])

  const [event, setEvent] = useState({
    name: "",
    date: "",
    type: "Night Event",
  })
  const [isEmpty, setIsEmpty] = useState(false)
  const [isPlanEmpty, setIsPlanEmpty] = useState(false)
  const [planDuration, setPlanDuration] = useState("mo")
  const [planDurationName, setPlanDurationName] = useState("Monthly")

  const [plan, setPlan] = useState({
    title: "",
    price: 0,
    yearly: false,
  })

  const [planOptions, setPlanOptions] = useState([
    {
      id: 1,
      logo: arcadeLogo,
      title: "Arcade",
      price: 9,
      monthlyPrice: 9,
      yearlyPrice: 90,
      selected: false,
    },
    {
      id: 2,
      logo: advancedLogo,
      title: "Advanced",
      price: 12,
      monthlyPrice: 12,
      yearlyPrice: 120,
      selected: false,
    },
    {
      id: 3,
      logo: proLogo,
      title: "Pro",
      price: 15,
      monthlyPrice: 15,
      yearlyPrice: 150,
      selected: false,
    },
  ])

  const [addonOptions, setAddonOptions] = useState([
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      monthlyPrice: 1,
      yearlyPrice: 10,
      selected: false,
    },
    {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
    {
      id: 3,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
  ])

  const [addons, setAddons] = useState([])

  const [displayThankyou, setDisplayThankyou] = useState(false)

  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true }
        } else {
          return { ...step, active: false }
        }
      })
      return updatedSteps
    })
    if (stepNumber > 1) {
      setGoBackVisible("visible")
    } else {
      setGoBackVisible("invisible")
    }

    // console.log(steps);
    // console.log(stepNumber);
    // console.log(event);
    // console.log(plan);
    //console.log(addons);
    // console.log(planOptions);
    // console.log(addonOptions);
    // console.log(plan);
    // console.log(isPlanEmpty);
    // console.log(displayThankyou);
    // console.log(planDuration);
  }, [
    stepNumber,
    event,
    plan,
    addons,
    addonOptions,
    planOptions,
    isPlanEmpty,
    displayThankyou,
  ])

  //------------------------------FUNCTIONS------------------------------
  const nextStep = () => {
    if (stepNumber == 1) {
      if (
        event.name.length == 0 ||
        event.date.length == 0 ||
        event.type.length == 0
      ) {
        setIsEmpty(true)
        return
      } else {
        setIsEmpty(false)
        console.log(event)
        // await createEvent(payload)
      }
    }

    if (stepNumber == 2) {
      if (plan.title.length == 0) {
        setIsPlanEmpty(true)
        return
      } else {
        setIsPlanEmpty(false)
      }
    }

    setStepNumber((prevStep) => prevStep + 1)
  }

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1)
  }

  const changeClick = () => {
    setStepNumber((prevStep) => prevStep - 2)
  }

  const changeEventInfo = (event) => {
    setEvent((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value }
    })
  }

  const selectPlan = (title, price, id) => {
    setPlanOptions((prevPlanOptions) => {
      const updatedPlanOptions = prevPlanOptions.map((planOption) => {
        if (planOption.id == id) {
          return { ...planOption, selected: true }
        } else {
          return { ...planOption, selected: false }
        }
      })
      return updatedPlanOptions
    })

    setPlan((prevPlan) => {
      return { ...prevPlan, title: title, price: price }
    })
  }
  const toggleDuration = () => {
    if (plan.yearly == false) {
      setPlan((prevPlan) => {
        setPlanDuration("yr")
        setPlanDurationName("Yearly")

        setPlanOptions((prevPlanOptions) => {
          const updatedPlanOptions = prevPlanOptions.map((planOption) => {
            return { ...planOption, price: planOption.yearlyPrice }
          })
          return updatedPlanOptions
        })

        setAddonOptions((prevAddonOptions) => {
          const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
            return { ...addonOption, price: addonOption.yearlyPrice }
          })
          return updatedAddonOptions
        })

        return { ...prevPlan, yearly: true }
      })
    } else {
      setPlan((prevPlan) => {
        setPlanDuration("mo")
        setPlanDurationName("Monthly")

        setPlanOptions((prevPlanOptions) => {
          const updatedPlanOptions = prevPlanOptions.map((planOption) => {
            return { ...planOption, price: planOption.monthlyPrice }
          })
          return updatedPlanOptions
        })

        setAddonOptions((prevAddonOptions) => {
          const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
            return { ...addonOption, price: addonOption.monthlyPrice }
          })
          return updatedAddonOptions
        })

        return { ...prevPlan, yearly: false }
      })
    }

    // setPlan((prevPlan) => {
    //   return { ...prevPlan, yearly: !plan.yearly };
    // });
  }

  const checkBox = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"))
    const title = e.target.getAttribute("data-title-name")
    const price = parseInt(e.target.getAttribute("data-price"))
    if (e.target.checked == true) {
      setAddons((prevAddons) => [
        ...prevAddons,
        { id: id, title: title, price: price },
      ])
    } else {
      setAddons((prevAddons) => {
        return prevAddons.filter((addon) => addon.id != id)
      })
    }

    setAddonOptions((prevAddons) => {
      const updatedAddons = prevAddons.map((addon) => {
        if (addon.id == id) {
          if (addon.selected == false) {
            return { ...addon, selected: true }
          } else {
            return { ...addon, selected: false }
          }
        } else {
          return addon
        }
      })
      return updatedAddons
    })
  }

  // const selectAddon = (id) => {
  //   setAddonOptions((prevAddons) => {
  //     const updatedAddons = prevAddons.map((addon) => {
  //       if (addon.id == id) {
  //         if (addon.selected == false) {
  //           return { ...addon, selected: true };
  //         } else {
  //           return { ...addon, selected: false };
  //         }
  //       } else {
  //         return addon;
  //       }
  //     });
  //     return updatedAddons;
  //   });
  // };

  return (
    <div className="container">
      <div className="justify-center rounded-xl bg-[#d6d9e6] md:flex md:bg-white md:p-3">
        <div className="relative">
          <Image
            priority
            className="hidden md:block"
            src={BackgroundSidebar}
            alt="sidebar"
          />
          <Image
            priority
            className="block w-full md:hidden"
            src={BackgroundSidebarMobile}
            alt="topbar"
          />

          <div className="absolute inset-0 mt-8 flex justify-center space-x-10 md:mt-0 md:block md:space-x-0 md:space-y-7 md:pl-6 md:pt-8">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>
        <div className="md:w-100 absolute top-40 mx-8 mb-40 flex w-[450px] flex-col justify-between rounded-2xl bg-white px-16 pt-10 pb-16 md:static md:mx-28 md:my-2 md:px-0 md:py-5">
          {(displayThankyou && (
            //<div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
            <>
              <Thankyou />
            </>
            //</div>
          )) || (
            // <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
            <>
              <div>
                {(stepNumber === 1 && (
                  <YourInfo
                    onChangeYourInfo={changeEventInfo}
                    event={event}
                    currentStep={stepNumber}
                    isEmpty={isEmpty}
                  />
                )) ||
                  (stepNumber === 2 && (
                    <Plan
                      onPlanSelect={selectPlan}
                      onToggleDuration={toggleDuration}
                      currentStep={stepNumber}
                      planOptions={planOptions}
                      isPlanEmpty={isPlanEmpty}
                      planDuration={planDuration}
                    />
                  )) ||
                  (stepNumber === 3 && (
                    <Addons
                      onBoxCheck={checkBox}
                      currentStep={stepNumber}
                      addonOptions={addonOptions}
                      planDuration={planDuration}
                    />
                  )) ||
                  (stepNumber === 4 && (
                    <Summary
                      selectedPlan={plan}
                      selectedAddons={addons}
                      currentStep={stepNumber}
                      planDuration={planDuration}
                      planDurationName={planDurationName}
                      onChangeClick={changeClick}
                    />
                  ))}
              </div>
              <div className="w-[700px]] fixed bottom-0 left-0 flex w-full items-center justify-between bg-white p-5 px-16 md:static md:static md:p-0">
                {/* {stepNumber != 1 && (
              <div
                onClick={prevStep}
                className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
              >
                Go back
              </div>
            )} */}
                <div
                  onClick={prevStep}
                  className={`cursor-pointer select-none font-medium text-[#9699ab] transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                >
                  Go back
                </div>
                {stepNumber === 4 ? (
                  <div
                    onClick={() => setDisplayThankyou(true)}
                    className="cursor-pointer select-none rounded-lg bg-[#473dff] py-3 px-5 font-medium text-white transition duration-100 hover:opacity-90"
                  >
                    Confirm
                  </div>
                ) : (
                  <div
                    onClick={nextStep}
                    className="cursor-pointer select-none rounded-lg bg-[#02295a] py-3 px-5 font-medium text-white transition duration-100 hover:opacity-90"
                  >
                    Next Step
                  </div>
                )}
              </div>
            </>
            // </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form