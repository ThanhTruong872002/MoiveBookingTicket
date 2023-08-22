import axios from "axios";
import { useEffect } from "react";
import { Tab, initTE } from "tw-elements";

const ShowTime = () => {


  useEffect(() => {
    initTE({ Tab });
  }, []);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
  //   })
  //   .then(function (response) {
  //     console.log(response.data.content)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
  // }, [])
  

  return (
    <div className="h-[5000px] container flex">
      <ul
        className="mr-4 flex list-none flex-col flex-wrap pl-0"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className="text-center">
          <a
            href="#tabs-home"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-home"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li role="presentation" className="text-center">
          <a
            href="#tabs-profile"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li role="presentation" className="text-center">
          <a
            href="#tabs-messages"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
        <li role="presentation" className="text-center">
          <a
            href="#tabs-contact"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-contact"
            role="tab"
            aria-controls="tabs-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="my-2">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
          data-te-tab-active
        >
          <div className="flex">
            <ul
              className="mr-4 flex list-none flex-col flex-wrap pl-0"
              role="tablist"
              data-te-nav-ref
            >
              <li role="presentation" className="flex-grow text-center">
                <a
                  href="#tabs-home03"
                  className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-home03"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-home03"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li role="presentation" className="flex-grow text-center">
                <a
                  href="#tabs-profile03"
                  className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-profile03"
                  role="tab"
                  aria-controls="tabs-profile03"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li role="presentation" className="flex-grow text-center">
                <a
                  href="#tabs-messages03"
                  className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-messages03"
                  role="tab"
                  aria-controls="tabs-messages03"
                  aria-selected="false"
                >
                  Messages
                </a>
              </li>
              <li role="presentation" className="flex-grow text-center">
                <a
                  href="#tabs-contact03"
                  className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-contact03"
                  role="tab"
                  aria-controls="tabs-contact03"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="my-2">
              <div
                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home03"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
                data-te-tab-active
              >
                Tab 1 content
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile03"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03"
              >
                Tab 2 content
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-messages03"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03"
              >
                Tab 3 content
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-contact03"
                role="tabpanel"
                aria-labelledby="tabs-contact-tab03"
              >
                Tab 4 content
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 3 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-contact"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab"
        >
          Tab 4 content
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
