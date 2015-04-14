		$(function(){
			$(".guide").hide();
			
			var _hash=window.location.hash.substr(1);
			$("#lolCloudGuides div").eq(_hash).fadeIn();
			$(".addArrow a").click(function(){
				var url = $(this).attr("href");
				window.location.href=url;
				$(".guide").hide();
				
				var _hash=window.location.hash.substr(1);
				$("#lolCloudGuides tr").eq(_hash).fadeIn();
				$("#lolCloudIcons td").eq(_hash).click();
				return false;
			});
			$(".guidePics").lightBox();
			$(".guidePicsa").lightBox();
			$(".guidePics1").lightBox();
			$(".guidePics2").lightBox();
			$(".guidePics3").lightBox();
			$(".guidePics4").lightBox();
			$(".guidePicsA").lightBox();
			$(".guidePicsA2").lightBox();
			$(".guidePicsA3").lightBox();
			$(".guidePicsA4").lightBox();
			$(".guidePicsM").lightBox();
			$(".guidePicsM2").lightBox();
			$(".guidePicsM3").lightBox();
			$(".guidePicsi").lightBox();
			$(".guidePicsi2").lightBox();
			$(".guidePicsi3").lightBox();
			$(".guidePicsi4").lightBox();
			
			$("#lolCloudIcons td").click(function(){
			console.log("blah");
				var img = $(this).find("img");
				$("#lolCloudIcons img").each(function(){
					$(this).attr("src",$(this).attr("data-default")).removeClass("lolCloudIconsActive");
				});
				img.attr("src",img.attr("data-active")).addClass("lolCloudIconsActive");
				$("#lolCloudGuides tr").hide();
				$("#lolCloudGuides tr").eq($(this).index()).fadeIn();
			});
						$("#lolCloudIcons td").eq(_hash).click();

		});