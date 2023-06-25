import { getListAnnouncement,deleteAnnouncementById ,postAnnouncement, getAnnouncementById, updateAnnouncementById } from "./fetchCoreHRAnnouncement";
import { getListAwards, postAwards, getAwardsById, updateAwardsById, deleteAwardsById } from "./fetchCoreHRAwards";
import { getListComplaint, deleteComplaintsById ,postComplaints, getComplaintsById, updateComplaintsById } from "./fetchCoreHRComplaint";
import { getListLogView, postLogview, getLogviewById, updateLogviewById } from "./fetchCoreHRLogView";
import { getListPromotion,deletePromotionById ,postPromotion, getPromotionById, updatePromotionById } from "./fetchCoreHRPromotion";
import { getListResign,deleteResignById ,postResign, getResignById, updateResignById } from "./fetchCoreHRResign";
import { getListWarning, deleteWarningById ,postWarning, getWarningById, updateWarningById } from "./fetchCoreHRWarning";

export {
    getListAnnouncement,
    getListAwards,
    updateAwardsById,
    getAwardsById,
    getListComplaint,
    getListLogView,
    getListPromotion,
    getListResign,
    getListWarning,
    postAwards,
    getAnnouncementById,
    getComplaintsById,
    getLogviewById,
    getPromotionById,
    getResignById,
    getWarningById,
    postAnnouncement,
    postComplaints,
    postLogview,
    postPromotion,
    postResign,
    postWarning,
    updateAnnouncementById,
    updateComplaintsById,
    updateLogviewById,
    updatePromotionById,
    updateResignById,
    updateWarningById,
    deleteAwardsById,
    deleteAnnouncementById,
    deleteComplaintsById,
    deletePromotionById,
    deleteResignById,
    deleteWarningById,
}