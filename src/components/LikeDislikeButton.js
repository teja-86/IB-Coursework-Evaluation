import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SvgLikeIcon from "../../public/icons/SvgLikeIcon";
import SvgDislikeIcon from "../../public/icons/SvgDislikeIcons";
import { transitionClass } from "@/lib/globalConstants";

const LikeDislikeButtons = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showFlyingLike, setShowFlyingLike] = useState(false);
  const [showFlyingDislike, setShowFlyingDislike] = useState(false);

  const commonButtonClasses =
    "flex size-[28px] items-center justify-center rounded-full hover:scale-105" +
    transitionClass;
  const flyingIconClasses =
    "flex items-center justify-center size-[28px] text-white rounded-full absolute" +
    transitionClass;

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
    triggerFlyingEffect(setShowFlyingLike);
  };

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
    triggerFlyingEffect(setShowFlyingDislike);
  };

  const triggerFlyingEffect = (setEffect) => {
    setEffect(true);
    setTimeout(() => setEffect(false), 1000);
  };

  return (
    <div className="relative flex gap-5">
      <Button
        onClick={handleLikeClick}
        variant="outline"
        className={`${commonButtonClasses} ${
          isLiked ? "bg-brand-primary text-white" : "bg-neutrals-100"
        }`}
      >
        <SvgLikeIcon />
      </Button>
      <Button
        onClick={handleDislikeClick}
        variant="outline"
        className={`${commonButtonClasses} ${
          isDisliked ? "bg-red-500 text-white" : "bg-neutrals-100"
        }`}
      >
        <SvgDislikeIcon />
      </Button>
      <AnimatePresence>
        {showFlyingLike && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: -50, scale: 1.2 }}
            exit={{ opacity: 0, y: -70, scale: 1.5 }}
            className={`${flyingIconClasses} left-[6px] top-[-10px] bg-brand-primary`}
          >
            <SvgLikeIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showFlyingDislike && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: -50, scale: 1.2 }}
            exit={{ opacity: 0, y: -70, scale: 1.5 }}
            className={`${flyingIconClasses} left-[50px] top-[-10px] bg-red-500`}
          >
            <SvgDislikeIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LikeDislikeButtons;
