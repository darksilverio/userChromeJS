::2017.03.03

:Profiles-1
cls
echo.
echo  ��Ҫ�P�]Firefox����Ո�����Ҫ���Y��!
echo.
echo  ���������������
pause>nul
cls

rem �O�Â��·���Լ��R�r�ļ��A
@echo �P�]����g�[�����Ԅ��_ʼ��ݡ���
taskkill /im firefox.exe
cd /d %~dp0
::������������λ�õ������ļ��У�Profiles����������4��
set BackDir=..\..\..\..

::�O���R�r�ļ��A
set TempFolder1="%TempFolder%\1"
set TempFolder2="%TempFolder%\2"
set TempFolder3="%TempFolder%\3"

::���\��һ�η�ֹ��һ��δ�ܽKֹ
taskkill /im firefox.exe

::�ȴ�3��
@ping 127.0.0.1 -n 3 -w 1000 > nul

::�\��speedyfox����
set speedyfox=..\..\..\..\..\Software\run\speedyfox.exe
::Profiles·��ֻ���ý^��, ��ϧ
%speedyfox% /Firefox:"D:\Program Files\CingFox\Profiles"

rem ����Ŀ���ļ����R�r�ļ��A

::�������ļ��A
xcopy "%BackDir%\adblockplus" %TempFolder%\Profiles\adblockplus\  /s /y /i
xcopy "%BackDir%\autoproxy" %TempFolder%\Profiles\autoproxy\  /s /y /i
xcopy "%BackDir%\chrome" %TempFolder%\Profiles\chrome\  /s /y /i
xcopy "%BackDir%\extensions" %TempFolder%\Profiles\extensions\ /s /y /i
xcopy "%BackDir%\extension-data" %TempFolder%\Profiles\extension-data\ /s /y /i
::xcopy "%BackDir%\fireie" %TempFolder%\Profiles\fireie\ /s /y /i
xcopy "%BackDir%\gm_scripts" %TempFolder%\Profiles\gm_scripts\ /s /y /i
xcopy "%BackDir%\iMacros" %TempFolder%\Profiles\iMacros\ /s /y /i
xcopy "%BackDir%\searchplugins" %TempFolder%\Profiles\searchplugins\ /s /y /i

::/**�������ļ�**/
::��ǩ
xcopy "%BackDir%\bookmarks.html" %TempFolder%\Profiles\  /s /y /i
::��ȫ֤������
xcopy "%BackDir%\cert8.db" %TempFolder%\Profiles\  /s /y /i
xcopy "%BackDir%\cert_override.txt" %TempFolder%\Profiles\  /s /y /i
::Cookies: �������������ʹ�����վ��Ϣ��ͨ���������վ��ѡ����Ϣ���¼״̬
xcopy "%BackDir%\cookies.sqlite" %TempFolder%\Profiles\  /s /y /i
::foxyproxy.xml: FoxyProxy����
xcopy "%BackDir%\foxyproxy.xml" %TempFolder%\Profiles\  /s /y /i
::�Զ��幤����
xcopy "%BackDir%\localstore.rdf" %TempFolder%\Profiles\  /s /y /i
xcopy "%BackDir%\xulstore.json" %TempFolder%\Profiles\  /s /y /i
::���ػ: �趨�ĵ�ĳ���ļ����ʹ�ʱFirefoxӦ�����Ķ���
xcopy "%BackDir%\mimeTypes.rdf" %TempFolder%\Profiles\  /s /y /i
::վ���Զ�����ѡ��: ������������վ���Ȩ�����ã����磬����������Щ��վ��������ʾ�������ڣ����������վ���ҳ�����ż���
xcopy "%BackDir%\permissions.sqlite" %TempFolder%\Profiles\  /s /y /i
xcopy "%BackDir%\content-prefs.sqlite" %TempFolder%\Profiles\  /s /y /i
::�û��ֵ�
xcopy "%BackDir%\persdict.dat" %TempFolder%\Profiles\  /s /y /i
::��ǩ�������ʷ
xcopy "%BackDir%\places.sqlite" %TempFolder%\Profiles\  /s /y /i
::��� MIME ����
xcopy "%BackDir%\pluginreg.dat" %TempFolder%\Profiles\  /s /y /i
::��������
xcopy "%BackDir%\search.json.mozlz4" %TempFolder%\Profiles\  /s /y /i
::Stylish��ʽ
::xcopy "%BackDir%\stylish.sqlite" %TempFolder%\Profiles\  /s /y /i
::��������
xcopy "%BackDir%\user.js" %TempFolder%\Profiles\  /s /y /i
xcopy "%BackDir%\prefs.js" %TempFolder%\Profiles\  /s /y /i
::Readitlater
xcopy "%BackDir%\key3.db" %TempFolder%\Profiles\  /s /y /i
xcopy "%BackDir%\logins.json" %TempFolder%\Profiles\  /s /y /i
xcopy "%BackDir%\readItLater.sqlite" %TempFolder%\Profiles\  /s /y /i
::����
xcopy "%BackDir%\readme.js" %TempFolder%\Profiles\  /s /y /i


::�����h����
del %TempFolder%\Profiles\chrome\UserScriptLoader\require\  /s /q
del %TempFolder%\Profiles\extensions\userChromeJS@mozdev.org\content\myNewTab\bingImg\  /s /q
del %TempFolder%\Profiles\autoproxy\patterns.ini-temp  /s /q
del %TempFolder%\Profiles\autoproxy\patterns-backup*.ini  /s /q
del %TempFolder%\Profiles\extension-data\dedao.sqlite  /s /q
::HostTools�����ı����ļ�
del %SystemRoot%\system32\drivers\etc\hosts.*.bak  /s /q


::�h��Lastpass��һЩ��Ŀ
::����Platform
del %TempFolder%\Profiles\extensions\support@lastpass.com\platform\  /s /q
xcopy "%BackDir%\extensions\support@lastpass.com\platform\WINNT_x86_64-msvc" %TempFolder%\Profiles\extensions\support@lastpass.com\platform\WINNT_x86_64-msvc\ /s /y /i


::�xȡ�汾̖�����ڼ��r�g
::������������λ�õ�Firefox�����ļ��У�firefox����������5��
for /f "usebackq eol=; tokens=1,2 delims==" %%i in ("..\..\..\..\..\Firefox\application.ini")do (if %%i==Version set ver=%%j)
