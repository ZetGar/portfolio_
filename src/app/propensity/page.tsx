"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from "next/image";

import { data } from "./data/data";
import styles from "../page.module.css";
import Modal from "../shared/widgets/Modal";
import Link from "next/link";

export default function PropensityPage() {
  const router = useRouter();
  const [hasResult, setHasResult] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    const result = localStorage.getItem("propensity_result");
    setHasResult(!!result);
  }, []);

  const handleImageClick = (images: string[], index: number) => {
    setSelectedImages(images);
    setSelectedImageIndex(index);
  };

  if (hasResult === null) return <p>Loading...</p>;

  const handlePreviousResult = () => {
    if (hasResult) {
      const savedAnswers = localStorage.getItem("propensity_result");
      if (savedAnswers) {
        router.push(
          `/propensity/analysis?step=5&answers=${encodeURIComponent(
            savedAnswers
          )}`
        );
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>{data.title}</h2>
      </div>

      {data.preview && (
        <div className={styles.appDownloadWrap}>
          {data.preview.content.map((previewDownload, index) => (
            <Link href={previewDownload} key={`preview_${index}`}>
              {index === 0 ? "구글플레이 다운로드" : "애플스토어 다운로드"}
            </Link>
          ))}
        </div>
      )}

      <div className={styles.descriptionWrap}>
        {data.description.map((desc, idx) => (
          <div key={idx} className={styles.description}>
            <p>{desc.title}</p>

            <div>
              {desc.content.map((c, index) => (
                <div key={`content_${index}`} className={styles.contentWrap}>
                  <p>{c.title}</p>
                  <div>
                    {c.content.map((content, cindex) => (
                      <div
                        key={`cindex_${cindex}`}
                        className={styles.textAndImage}
                      >
                        <p>· {content}</p>

                        {c.img?.length && cindex === c.content.length - 1 && (
                          <div className={styles.thumbnailWrap}>
                            {c.img.map((image: string, imgIndex: number) => (
                              <div
                                key={`img_${imgIndex}`}
                                className={styles.thumbnail}
                                onClick={() =>
                                  handleImageClick(c.img!, imgIndex)
                                }
                              >
                                <Image
                                  src={image}
                                  alt={desc.title}
                                  width={200}
                                  height={200}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {desc.actions && (
                <div className={styles.buttonWrap}>
                  {desc.actions.map((action, index) => {
                    const handleClick = () => {
                      if (action.label === "이전 결과 보기") {
                        handlePreviousResult();
                      } else if (action.link) {
                        router.push(action.link);
                      }
                    };

                    return (
                      <button key={`action_${index}`} onClick={handleClick}>
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}

        {selectedImageIndex !== null && (
          <Lightbox
            open={true}
            close={() => setSelectedImageIndex(null)}
            index={selectedImageIndex}
            slides={selectedImages.map((img) => ({ src: img }))}
            plugins={[Zoom]}
          />
        )}
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          buttons={[
            {
              label: "확인",
              onClick: () => router.push("/propensity/analysis"),
              type: "primary",
            },
          ]}
        >
          이전 결과가 없습니다.
          <br />
          처음부터 성향 분석을 진행합니다.
        </Modal>
      )}
    </div>
  );
}
