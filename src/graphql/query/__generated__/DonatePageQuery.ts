/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DonatePageQuery
// ====================================================

export interface DonatePageQuery_strapiDonatePage_moneroQr_formats_thumbnail {
  __typename: "StrapiDonatePageMoneroQrFormatsThumbnail";
  url: string | null;
}

export interface DonatePageQuery_strapiDonatePage_moneroQr_formats {
  __typename: "StrapiDonatePageMoneroQrFormats";
  thumbnail: DonatePageQuery_strapiDonatePage_moneroQr_formats_thumbnail | null;
}

export interface DonatePageQuery_strapiDonatePage_moneroQr {
  __typename: "StrapiDonatePageMoneroQr";
  formats: DonatePageQuery_strapiDonatePage_moneroQr_formats | null;
}

export interface DonatePageQuery_strapiDonatePage {
  __typename: "StrapiDonatePage";
  title: string | null;
  content: string | null;
  moneroAddress: string | null;
  moneroQr: DonatePageQuery_strapiDonatePage_moneroQr | null;
}

export interface DonatePageQuery {
  strapiDonatePage: DonatePageQuery_strapiDonatePage | null;
}
