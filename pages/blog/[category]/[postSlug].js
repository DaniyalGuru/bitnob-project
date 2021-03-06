import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import { useRouter } from "next/router";
import { bitnobPlayStore, bitnobAppleStore } from "app-constants";
import { AppStore, PlayStore } from "public";
import { BiUserCircle } from "react-icons/bi";
import { AiFillCalendar, AiFillCloseCircle } from "react-icons/ai";
import { FaTags, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Card from "components/UI/Card/Card";
import style from "../../../components/shared/Header/Header.module.css";
import SearchBox from "components/UI/SearchBox/SearchBox";
import React, { useEffect, useState } from "react";
import FeaturedPost from "components/shared/FeaturedPost/FeaturedPost";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

export async function getStaticPaths() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  ).then((res) => res.json());
  const paths = res.posts.map((post) => ({
    params: { category: post.primary_tag.slug, postSlug: post.slug.toString() },
  }));
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${params.postSlug}/?key=${CONTENT_KEY}&include=tags,authors`
  );
  const post = await res1.json();

  const res2 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}&include=tags,authors`
  );
  const allPost = await res2.json();

  return { props: { post: post.posts, allPost: allPost.posts } };
};

const PostSlug = ({ post, allPost }) => {
  const router = useRouter();

  const [url, setUrl] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [blogImage, setBlogImage] = useState("false");

  useEffect(() => {
    setUrl(document.location.href);

    document.querySelectorAll("figure").forEach((ele) => {
      if (ele.querySelector('.kg-image')) {
        ele.querySelector('.kg-image').classList.add('cursor-pointer')
      }
      ele.addEventListener("click", (e) => {
        let figureBox = e.currentTarget.querySelector(".kg-image").src;
        setShowModal(true);
        setBlogImage(figureBox);
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Page title="Bitnob Blog Post">
        <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-0 pb-0">
          <div className="blogLayout pt-0 lg:px-20 px-5">
            <BitNobContainer>
              <SearchBox />
              <FeaturedPost />
              {post.map((obj, objIndex) => {
                const objDate = obj.published_at.slice(0, 10);
                let formatedDate = new Date(objDate).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                );

                function createMarkup() {
                  return { __html: obj.html };
                }

                return (
                  <React.Fragment key={objIndex}>
                    <div className="mt-20 ">
                      <div className="w-full">
                        <h1 className="text-black-900 font-bold mb-5 md:text-2xl text-xl text-center">
                          {obj.title}
                        </h1>
                        <img
                          src={
                            obj.feature_image
                              ? obj.feature_image
                              : "../../images/blog-default.jpeg"
                          }
                          className={` ${style.main_img} w-full mb-5 mx-auto mt-8 rounded-xl`}
                          alt=""
                        />
                        <div className="w-full mx-auto block lg:flex justify-between items-center">
                          <div className="w-full md:flex block justfy-start items-center">
                            <div
                              className={`${style.postTagWidth}  p-3 px-0 flex justify-start items-center cursor-pointer`}
                              onClick={() =>
                                router.push(
                                  `/author/${obj.primary_author.slug}`
                                )
                              }
                            >
                              <BiUserCircle
                                className={`${style.iconSize} text-sm text-bitGreen-500`}
                              />
                              <span
                                className={`text-xs ml-2 text-gray-600 font-medium`}
                              >
                                By {obj.primary_author.name}
                              </span>
                            </div>

                            <div
                              className={`${style.postTagWidth} p-3 px-0  flex justify-center items-center cursor-pointer`}
                              onClick={() =>
                                router.push(`/blog/date/${objDate}`)
                              }
                            >
                              <AiFillCalendar
                                className={`${style.iconSize} text-sm text-bitGreen-500`}
                              />
                              <span className="w-full text-xs ml-2 text-gray-600 font-medium">
                                {formatedDate}
                              </span>
                            </div>

                            <div
                              className={`${style.postTagWidth} p-3 pl-0 pr-0 flex justify-center items-center cursor-pointer`}
                              onClick={() =>
                                router.push(
                                  `/blog/category/${obj.primary_tag.slug}`
                                )
                              }
                            >
                              <FaTags
                                className={`${style.iconSize1} text-sm text-bitGreen-500`}
                              />
                              <span className="w-full capitalize text-xs ml-2 text-gray-600 font-medium">
                                {obj.primary_tag.name}
                              </span>
                            </div>
                          </div>
                          <div className="lg:mt-0 lg:mb-0 mt-5 mb-5 flex lg:justify-end justify-start item-center">
                            <a
                              className="fb-share"
                              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="p-2 bg-bitGreen-50 rounded-full cursor-pointer">
                                <FaFacebook className="text-bitGreen-500" />
                              </div>
                            </a>
                            <a
                              className="fb-share"
                              href={`https://twitter.com/intent/tweet?text=${url}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="p-2 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                                <FaTwitter className="text-bitGreen-500" />
                              </div>
                            </a>
                            <a
                              className="fb-share"
                              href={`https://api.whatsapp.com/send?text=${url}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="p-2 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                                <FaWhatsapp className="text-bitGreen-500" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-full mt-5 postParas"
                        dangerouslySetInnerHTML={createMarkup()}
                      ></div>
                    </div>
                    <div className="w-full mx-auto p-5 px-0">
                      <div className="w-full py-20 px-5 bg-bitGreen-400 rounded-2xl">
                        <img
                          src="../../images/logo-full.png"
                          className="md:w-32 w-28 mx-auto"
                          alt=""
                        />
                        <h1 className="md:text-2xl text-xl font-bold text-center mt-8">
                          The Better Way To Save & Invest
                        </h1>
                        <div className="mt-8 flex justify-center items-center sm:flex-row flex-col ">
                          <BitNobLink to={bitnobAppleStore}>
                            <AppStore className="w-32 md:w-auto" />
                          </BitNobLink>
                          <BitNobLink to={bitnobPlayStore}>
                            <PlayStore className="w-32 sm:ml-5 ml-0 md:w-auto" />
                          </BitNobLink>
                        </div>
                      </div>
                    </div>
                    <div className="w-full my-5">
                      <div className="w-full flex justify-start item-center">
                        <a
                          className="fb-share"
                          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="p-3 bg-bitGreen-50 rounded-full cursor-pointer">
                            <FaFacebook className="text-lg text-bitGreen-500" />
                          </div>
                        </a>
                        <a
                          className="fb-share"
                          href={`https://twitter.com/intent/tweet?text=${url}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="p-3 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                            <FaTwitter className="text-lg text-bitGreen-500" />
                          </div>
                        </a>
                        <a
                          className="fb-share"
                          href={`https://api.whatsapp.com/send?text=${url}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="p-3 bg-bitGreen-50 ml-3 rounded-full cursor-pointer">
                            <FaWhatsapp className="text-lg text-bitGreen-500" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="w-full mt-10">
                      <h1 className="text-center md:text-2xl text-xl font-bold">
                        You'll Like This
                      </h1>
                      <div className="w-full mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {allPost.slice(0, 3).map((item, i) => {
                          return (
                            <React.Fragment key={i}>
                              {item.primary_author.name !==
                                obj.primary_author.name && (
                                  <Card
                                    slug={item.slug}
                                    image={
                                      item.feature_image
                                        ? item.feature_image
                                        : "../../images/blog-default.jpeg"
                                    }
                                    title={item.primary_tag.name}
                                    description={item.excerpt}
                                    tag={item.primary_tag.slug}
                                  />
                                )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
              {showModal ? (
                <>
                  <div className={`${style.animateCards} flex overflow-x-hidden overflow-y-auto fixed inset-0 modalContainer outline-none focus:outline-none`}>
                    <div className="relative w-auto my-6 mx-auto max-w-5xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative p-6 flex-auto">
                          <div className="w-full flex justify-end mb-3"><AiFillCloseCircle className="text-xl text-bitGreen-500 cursor-pointer" onClick={() => setShowModal(false)} /></div>
                          <img src={blogImage} className='modalImage' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </BitNobContainer>
          </div>
        </div>
        <PreFooter />
      </Page>
    </React.Fragment>
  );
};

PostSlug.getLayout = getLayout;

export default PostSlug;
