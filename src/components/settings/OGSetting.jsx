import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";

//internal import
import Error from "@/components/form/others/Error";
import spinnerLoadingImage from "@/assets/img/spinner.gif";
import InputAreaTwo from "@/components/form/input/InputAreaTwo";
import Uploader from "@/components/image-uploader/Uploader";
import TextAreaCom from "@/components/form/others/TextAreaCom";

const OGSetting = ({
  errors,
  register,
  isSave,
  isSubmitting,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="sticky top-0 z-20 flex justify-end">
        {isSubmitting ? (
          <Button disabled={true} type="button" className="h-10 px-6">
            <img
              src={spinnerLoadingImage}
              alt="Loading"
              width={20}
              height={10}
            />{" "}
            <span className="font-serif ml-2 font-light">
              {" "}
              {t("Processing")}
            </span>
          </Button>
        ) : (
          <Button type="submit" className="h-10 px-6 ">
            {" "}
            {isSave ? t("SaveBtn") : t("UpdateBtn")}
          </Button>
        )}
      </div>
      <div className="grid grid-cols-12 font-sans">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 mr-3 ">
          <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 relative">
            <FiSettings className="mt-1 mr-2" />
            Open Graph Settings
          </div>

          <hr className="md:mb-12 mb-2" />
          <div className="lg:px-6 pt-4 lg:pl-40 lg:pr-40 md:pl-5 md:pr-5 flex-grow scrollbar-hide w-full max-h-full pb-0">
            
            <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                {t("OGTitle")}
              </label>
              <div className="sm:col-span-3">
                <InputAreaTwo
                  register={register}
                  label={t("OGTitle")}
                  name="og_title"
                  type="text"
                  placeholder={t("OGTitle")}
                />
                <Error errorName={errors.og_title} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                {t("OGDescription")}
              </label>
              <div className="sm:col-span-3">
                <TextAreaCom
                  required={true}
                  register={register}
                  label={t("OGDescription")}
                  name="og_description"
                  type="text"
                  placeholder={t("OGDescription")}
                />
                <Error errorName={errors.og_description} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                {t("OGUrl")}
              </label>
              <div className="sm:col-span-3">
                <InputAreaTwo
                  register={register}
                  label={t("OGUrl")}
                  name="og_url"
                  type="text"
                  placeholder={t("OGUrl")}
                />
                <Error errorName={errors.og_url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OGSetting;
