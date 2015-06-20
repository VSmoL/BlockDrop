using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;

public class GoogleAdShow : MonoBehaviour {

	public static BannerView bannerView;

	private void Start(){
//		GoogleAdShow.bannerView.Destroy ();
		RequestBanner();
	}

	private void RequestBanner()
	{
		if (GoogleAdShow.bannerView != null) {

		} 
		else {
			#if UNITY_ANDROID
			string adUnitId = "ca-app-pub-1663284785812885/5147379055";
			#elif UNITY_IPHONE
			string adUnitId = "INSERT_IOS_BANNER_AD_UNIT_ID_HERE";
			#else
			string adUnitId = "unexpected_platform";
			#endif

			// Create a 320x50 banner at the top of the screen.
			bannerView = new BannerView(adUnitId, AdSize.Banner, AdPosition.Bottom);
			// Create an empty ad request.
			AdRequest request = new AdRequest.Builder().Build();
			// Load the banner with the request.
			bannerView.LoadAd(request);
		}
	}
}
